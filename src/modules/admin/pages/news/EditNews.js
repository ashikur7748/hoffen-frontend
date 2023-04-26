import { React, useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { Container, Form, Row, Col, InputGroup, Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

import { edit, update } from '../../api/Axios';
import { apiNewsEdit, apiNewsUpdate } from '../../api/ApiList';

export const EditNews = () => {
    const location = useLocation();
    const id = { id: location.state }
    const navigate = useNavigate();

    const [data, setData] = useState([]);
    const [datetime, setDateTime] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [imagePreview, setImagePreview] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        edit(apiNewsEdit, id)
            .then((response) => {
                if (response.data[0]) {
                    setDateTime(response.data[0].datetime);
                    setTitle(response.data[0].title);
                    setDescription(response.data[0].description);
                    setImage(response.data[0].image);
                }

            })
            .catch(({ message }) => {
                navigate(`/errorpageprivate/${message}`);
            });
    }, []);

    const updateHandle = () => {
        setIsLoading(true);

        const formData = new FormData();
        formData.append('id', location.state);
        formData.append('datetime', datetime);
        formData.append('title', title);
        formData.append('description', description);
        formData.append('image', image);


        update(apiNewsUpdate, formData)
            .then((response) => {
                if (response.status === 200) {
                    swal({
                        title: "Updated Successfully",
                        icon: "success",
                    });
                    navigate('/admin/news/show');
                    setIsLoading(false);
                }
            })
            .catch(({ message }) => {
                navigate(`/errorpageprivate/${message}`);
            })
    }
    return (
        <Container>
            <Form encType="multipart/form-data">
                <Row className='d-flex justify-content-center align-items-center' style={{ height: '80vh' }}>
                    <Col md={5}>
                        <Row className='border rounded p-3'>
                            <Col md={12} className="mb-3">
                                <h2 className='fw-bolder bg-light py-3 text-center' style={{ color: 'var(--primaryColor)' }}>News Add</h2>
                            </Col>
                            <Col md={12}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">DateTime</InputGroup.Text>
                                    <Form.Control
                                        type="datetime-local"
                                        name="datetime"
                                        onChange={(e) => setDateTime(e.target.value)}
                                        value={datetime}
                                    />
                                </InputGroup>

                            </Col>
                            <Col md={12}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
                                    <Form.Control
                                        placeholder="Title"
                                        name="title"
                                        onChange={(e) => setTitle(e.target.value)}
                                        value={title}
                                    />
                                </InputGroup>

                            </Col>

                            <Col md={12}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>Description</InputGroup.Text>
                                    <Form.Control as="textarea" aria-label="With textarea"
                                        name="description"
                                        placeholder="Description"
                                        onChange={(e) => setDescription(e.target.value)}
                                        value={description}
                                    />
                                </InputGroup>

                            </Col>

                            <Col md={12}>
                                <Form.Group controlId="formFile" className="mb-3">
                                    <input className='form-control' name="image" type="file"
                                        accept='image/*'
                                        onChange={(e) => {
                                            setImage(e.target.files[0]);
                                            setImagePreview(true);
                                        }}
                                    />
                                </Form.Group>
                                <div>
                                    {imagePreview ?
                                        <img src={URL.createObjectURL(image)} alt=" Preview" width="150px" height="150px" /> :
                                        <img src={"http://localhost:8000/storage/news/" + image} width={150} height={150} />}
                                </div>


                            </Col>

                            <Col md={12} className='text-end'>
                                {isLoading ? <button className='btn' style={{ background: 'var(--primaryColor)', color: 'white' }} type="button" disabled>
                                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    Updatting...
                                </button> : <Button style={{ background: 'var(--primaryColor)', color: 'white' }} type="button" onClick={updateHandle}>
                                    Update
                                </Button>}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}
