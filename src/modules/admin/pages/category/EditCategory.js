import { React, useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { Container, Form, Row, Col, InputGroup, Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

import { apiCategoryEdit, apiCategoryUpdate } from '../../api/ApiList';
import { edit, update } from '../../api/Axios';

export const EditCategory = () => {

    const location = useLocation();
    const id = { id: location.state }

    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [category, setCategory] = useState("");
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        edit(apiCategoryEdit, id)
            .then((response) => {
                if (response.data[0]) {
                    setCategory(response.data[0].name);
                }

            })
            .catch(({ message }) => {
                navigate(`/errorpageprivate/${message}`);
            });
    }, []);


    const updateHandle = () => {
        setIsLoading(true);
        const formData = {
            id: location.state,
            name: category,
        }

        update(apiCategoryUpdate, formData)
            .then((response) => {
                if (response.status === 200) {
                    swal({
                        title: "Updated Successfully",
                        icon: "success",
                    });
                    navigate('/admin/category/show');
                    setIsLoading(false);
                }
            })
            .catch(({ message }) => {
                navigate(`/errorpageprivate/${message}`);
            })
    }



    return (
        <Container>
            <Form >
                <Row className='d-flex justify-content-center align-items-center' style={{ height: '80vh' }}>
                    <Col md={5}>
                        <Row className='border rounded p-3'>
                            <Col md={12} className="mb-3">
                                <h2 className='fw-bolder bg-light py-3 text-center' style={{ color: 'var(--primaryColor)' }}> Update Category</h2>
                            </Col>
                            <Col md={12}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">Category</InputGroup.Text>
                                    <Form.Control
                                        placeholder="Category"
                                        name="category"
                                        onChange={(e) => setCategory(e.target.value)}
                                        value={category}
                                    />
                                </InputGroup>
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


