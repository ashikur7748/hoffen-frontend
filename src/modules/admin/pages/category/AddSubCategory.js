import { React, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { Container, Form, Row, Col, InputGroup, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

import { subCategoryAdd } from '../../../../schema/Validation';
import { apiSubCategoryAdd, apiCategoryShow } from '../../api/ApiList';
import { store, show } from '../../api/Axios';

export const AddSubCategory = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        show(apiCategoryShow)
            .then((response) => {
                setData(response.data);
            })
            .catch(({ message }) => {
                navigate(`/errorpageprivate/${message}`);
            });
    }, []);
    const formik = useFormik({
        initialValues: {
            category: '',
            sub_category: ''
        },
        validationSchema: subCategoryAdd,

        onSubmit: (values, { resetForm }) => {
            setIsLoading(true);
            const inputData = {
                category_id: values.category,
                name: values.sub_category
            }

            store(apiSubCategoryAdd, inputData)
                .then((response) => {
                    if (response.status === 200) {
                        resetForm();
                        swal({
                            title: "Sub Category Added Successfully",
                            icon: "success",
                        });
                        setIsLoading(false);
                    }
                })
                .catch(({ message }) => {
                    navigate(`/errorpageprivate/${message}`);
                });
        }
    });
    return (
        <Container>
            <Form onSubmit={formik.handleSubmit} encType="multipart/form-data">
                <Row className='d-flex justify-content-center align-items-center' style={{ height: '80vh' }}>
                    <Col md={5}>
                        <Row className='border rounded p-3'>
                            <Col md={12}><h2 className='fw-bolder bg-light py-3 text-center mb-3' style={{ color: 'var(--primaryColor)' }}>Add Sub Category</h2></Col>

                            <Col md={12}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">Category</InputGroup.Text>
                                    <Form.Select aria-label="Default select example"
                                        onChange={formik.handleChange}
                                        value={formik.values.category}
                                        name="category"
                                    >
                                        <option value=''>Choose Category</option>
                                        {data && data.map((item, index) => (
                                            <option key={index} value={item.id}>
                                                {item.name}
                                            </option>
                                        ))}

                                    </Form.Select>
                                </InputGroup>
                                {formik.touched.category && formik.errors.category ? (
                                    <div className='text-danger'>{formik.errors.category}</div>
                                ) : null}
                            </Col>
                            <Col md={12}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">Sub Category</InputGroup.Text>
                                    <Form.Control
                                        placeholder="Category"
                                        name="sub_category"
                                        onChange={formik.handleChange}
                                        value={formik.values.sub_category}
                                    />
                                </InputGroup>
                                {formik.touched.sub_category && formik.errors.sub_category ? (
                                    <div className='text-danger'>{formik.errors.sub_category}</div>
                                ) : null}
                            </Col>
                            <Col md={12} className='text-end'>
                                {isLoading ? <button className='btn' style={{ background: 'var(--primaryColor)', color: 'white' }} type="button" disabled>
                                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    Submitting...
                                </button> : <Button style={{ background: 'var(--primaryColor)', color: 'white' }} type="submit">
                                    Submit
                                </Button>}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}
