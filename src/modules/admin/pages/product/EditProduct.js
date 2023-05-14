import { React, useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { Container, Form, Row, Col, InputGroup, Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

import { edit, update, showCategory, showSubCategory } from '../../api/Axios';
import { apiProductEdit, apiProductUpdate, apiCategoryShow, apiSubCategoryShow, } from '../../api/ApiList';

export const EditProduct = () => {
    const location = useLocation();
    const id = { id: location.state }
    const navigate = useNavigate();

    const [data, setData] = useState([]);
    const [category, setCategory] = useState("");
    const [subCategory, setSubCategory] = useState("");
    const [title, setTitle] = useState("");
    const [videoLink, setVideoLink] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [imagePreview, setImagePreview] = useState(false);

    const [categoryList, setCategoryList] = useState([]);
    const [subCategorytList, setSubCategoryList] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        showCategory(apiCategoryShow)
            .then((response) => {
                setCategoryList(response.data);
            })
            .catch(({ message }) => {
                navigate(`/errorpageprivate/${message}`);
            });
    }, []);

    useEffect(() => {
        showSubCategory(apiSubCategoryShow)
            .then((response) => {
                setSubCategoryList(response.data);
            })
            .catch(({ message }) => {
                navigate(`/errorpageprivate/${message}`);
            });
    }, []);

    useEffect(() => {
        edit(apiProductEdit, id)
            .then((response) => {
                if (response.data[0]) {
                    setCategory(response.data[0].category_id);
                    setSubCategory(response.data[0].subcategory_id);
                    setTitle(response.data[0].title);
                    setVideoLink(response.data[0].videolink);
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
        formData.append('category_id', category);
        formData.append('subcategory_id', subCategory);
        formData.append('title', title);
        formData.append('description', description);
        formData.append('videolink', videoLink);
        formData.append('image', image);


        update(apiProductUpdate, formData)
            .then((response) => {
                if (response.status === 200) {
                    swal({
                        title: "Updated Successfully",
                        icon: "success",
                    });
                    navigate('/admin/product/show');
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
                                <h2 className='fw-bolder bg-light py-3 text-center' style={{ color: 'var(--primaryColor)' }}>Update Product</h2>
                            </Col>
                            <Col md={12}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">Category</InputGroup.Text>
                                    <Form.Select aria-label="Default select example"
                                        onChange={(e) => setCategory(e.target.value)}
                                        value={category}
                                        name="category"
                                    >
                                        <option value=''>Choose Category</option>
                                        {categoryList && categoryList.map((item, index) => (
                                            <option key={index} value={item.id}>
                                                {item.name}
                                            </option>
                                        ))}

                                    </Form.Select>
                                </InputGroup>

                            </Col>
                            <Col md={12}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">Sub Category</InputGroup.Text>
                                    <Form.Select aria-label="Default select example"
                                        onChange={(e) => setSubCategory(e.target.value)}
                                        value={subCategory}
                                        name="sub_category"
                                    >
                                        <option value=''>Choose SubCategory</option>
                                        {subCategorytList && subCategorytList.map((item, index) => (
                                            <option key={index} value={item.id}>
                                                {item.name}
                                            </option>
                                        ))}

                                    </Form.Select>
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
                                        onChange={(e) => setDescription(e.target.value)}
                                        value={description}
                                        name="description"
                                    />
                                </InputGroup>

                            </Col>
                            <Col md={12}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">Video Link</InputGroup.Text>
                                    <Form.Control
                                        placeholder="Video link"
                                        aria-label="videolink"
                                        name="videolink"
                                        onChange={(e) => setVideoLink(e.target.value)}
                                        value={videoLink}
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
                                        <img src={"http://localhost:8000/storage/products/" + image} width={150} height={150} />}
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
