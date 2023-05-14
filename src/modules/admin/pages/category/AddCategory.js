import { React, useState } from 'react';
import { useFormik } from 'formik';
import { Container, Form, Row, Col, InputGroup, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

import { categoryAdd } from '../../../../schema/Validation';
import { apiCategoryAdd } from '../../api/ApiList';
import { store } from '../../api/Axios';

export const AddCategory = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const formik = useFormik({
        initialValues: {
            category: ''
        },
        validationSchema: categoryAdd,

        onSubmit: (values, { resetForm }) => {
            setIsLoading(true);
            const inputData = {
                name: values.category
            }

            store(apiCategoryAdd, inputData)
                .then((response) => {
                    if (response.status === 200) {
                        resetForm();
                        swal({
                            title: "Category Added Successfully",
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
                            <Col md={12}><h2 className='fw-bolder bg-light py-3 text-center mb-3' style={{ color: 'var(--primaryColor)' }}>Category Add</h2></Col>

                            <Col md={12}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">Category</InputGroup.Text>
                                    <Form.Control
                                        placeholder="Category"
                                        name="category"
                                        onChange={formik.handleChange}
                                        value={formik.values.category}
                                    />
                                </InputGroup>
                                {formik.touched.category && formik.errors.category ? (
                                    <div className='text-danger'>{formik.errors.category}</div>
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
