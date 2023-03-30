import { React, useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { Container, Form, Row, Col, InputGroup, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

import { eventValidationSchema } from '../../../../schema/Validation';
import { apiEventAdd } from '../../api/ApiList';
import { store } from '../../api/Axios';

export const AddEvent = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);

    const formik = useFormik({
        initialValues: {
            datetime: '',
            title: '',
            venue: '',
            image: '',
            description: ''
        },
        validationSchema: eventValidationSchema,

        onSubmit: (values, { resetForm }) => {
            setIsLoading(true);
            const formData = new FormData();
            formData.append('image', values.image);
            formData.append('datetime', values.datetime);
            formData.append('title', values.title);
            formData.append('venue', values.venue);
            formData.append('description', values.description);

            store(apiEventAdd, formData)
                .then((response) => {
                    if (response.status === 200) {
                        resetForm();
                        swal({
                            title: "Event Added Successfully",
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
                                <h2 className='fw-bolder bg-light py-3 text-center' style={{ color: 'var(--primaryColor)' }}>Event Add</h2>
                            </Col>
                            <Col md={12}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">DateTime</InputGroup.Text>
                                    <Form.Control
                                        type="datetime-local"
                                        name="datetime"
                                        onChange={formik.handleChange}
                                        value={formik.values.distributor_name}
                                    />
                                </InputGroup>
                                {formik.touched.datetime && formik.errors.datetime ? (
                                    <div className='text-danger'>{formik.errors.datetime}</div>
                                ) : null}
                            </Col>
                            <Col md={12}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
                                    <Form.Control
                                        placeholder="Title"
                                        name="title"
                                        onChange={formik.handleChange}
                                        value={formik.values.title}
                                    />
                                </InputGroup>
                                {formik.touched.title && formik.errors.title ? (
                                    <div className='text-danger'>{formik.errors.title}</div>
                                ) : null}
                            </Col>
                            <Col md={12}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">Venue</InputGroup.Text>
                                    <Form.Control
                                        placeholder="Venue"
                                        name="venue"
                                        onChange={formik.handleChange}
                                        value={formik.values.venue}
                                    />
                                </InputGroup>
                                {formik.touched.venue && formik.errors.venue ? (
                                    <div className='text-danger'>{formik.errors.venue}</div>
                                ) : null}
                            </Col>
                            <Col md={12}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>Description</InputGroup.Text>
                                    <Form.Control as="textarea" aria-label="With textarea"
                                        onChange={formik.handleChange}
                                        value={formik.values.description}
                                        name="description"
                                        placeholder="Description"
                                    />
                                </InputGroup>
                                {formik.touched.description && formik.errors.description ? (
                                    <div className='text-danger'>{formik.errors.description}</div>
                                ) : null}
                            </Col>

                            <Col md={12}>
                                <Form.Group controlId="formFile" className="mb-3">
                                    <input className='form-control' name="image" type="file"
                                        accept='image/*'
                                        onChange={(e) => {
                                            formik.setFieldValue('image', e.currentTarget.files[0]);
                                            setSelectedFile(e.target.files[0]);
                                        }}
                                    />
                                </Form.Group>

                                {formik.touched.image && formik.errors.image ? (
                                    <div className='text-danger'>{formik.errors.image}</div>
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
