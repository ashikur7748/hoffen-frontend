import { React, useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { Container, Form, Row, Col, InputGroup, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

import { distributorValidationSchema } from '../../../../schema/Validation';
import {
    apiDistributorShow,
    apiDistributorAdd,
    apiDistributorEdit,
    apiDistributorUpdate,
    apiDistributorDelete
} from '../../api/ApiList';
import { store } from '../../api/Axios';

export const AddDistributor = () => {

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const formik = useFormik({
        initialValues: {
            distributor_name: '',
            owner_name: '',
            phone: '',
            email: '',
            social_media: ''
        },
        validationSchema: distributorValidationSchema,

        onSubmit: (values, { resetForm }) => {
            setIsLoading(true);
            const inputData = {
                distributor_name: values.distributor_name,
                owner_name: values.owner_name,
                phone: values.phone,
                email: values.email,
                social_media: values.social_media,
            }
            store(apiDistributorAdd, inputData)
                .then((response) => {
                    if (response.status === 200) {
                        resetForm();
                        swal({
                            title: "Distributor Added Successfully",
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
                            <Col md={12} className="mb-3">
                                <h2 className='fw-bolder bg-light py-3 text-center' style={{ color: 'var(--primaryColor)' }}>Distributor Add</h2>
                            </Col>
                            <Col md={12}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">Distributor</InputGroup.Text>
                                    <Form.Control
                                        placeholder="Distributor"
                                        name="distributor_name"
                                        onChange={formik.handleChange}
                                        value={formik.values.distributor_name}
                                    />
                                </InputGroup>
                                {formik.touched.distributor_name && formik.errors.distributor_name ? (
                                    <div className='text-danger'>{formik.errors.distributor_name}</div>
                                ) : null}
                            </Col>
                            <Col md={12}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">Owner</InputGroup.Text>
                                    <Form.Control
                                        placeholder="Owner"
                                        name="owner_name"
                                        onChange={formik.handleChange}
                                        value={formik.values.owner_name}
                                    />
                                </InputGroup>
                                {formik.touched.owner_name && formik.errors.owner_name ? (
                                    <div className='text-danger'>{formik.errors.owner_name}</div>
                                ) : null}
                            </Col>
                            <Col md={12}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">Phone</InputGroup.Text>
                                    <Form.Control
                                        placeholder="Phone"
                                        name="phone"
                                        onChange={formik.handleChange}
                                        value={formik.values.phone}
                                    />
                                </InputGroup>
                                {formik.touched.phone && formik.errors.phone ? (
                                    <div className='text-danger'>{formik.errors.phone}</div>
                                ) : null}
                            </Col>
                            <Col md={12}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
                                    <Form.Control
                                        placeholder="Email"
                                        name="email"
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                    />
                                </InputGroup>
                                {formik.touched.email && formik.errors.email ? (
                                    <div className='text-danger'>{formik.errors.email}</div>
                                ) : null}
                            </Col>
                            <Col md={12}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">Social Link</InputGroup.Text>
                                    <Form.Control
                                        placeholder="URL"
                                        name="social_media"
                                        onChange={formik.handleChange}
                                        value={formik.values.social_media}
                                    />
                                </InputGroup>
                                {formik.touched.social_media && formik.errors.social_media ? (
                                    <div className='text-danger'>{formik.errors.social_media}</div>
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
