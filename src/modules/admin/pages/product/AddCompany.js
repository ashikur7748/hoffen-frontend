import { React, useState } from 'react';
import { useFormik } from 'formik';
import { Container, Form, Row, Col, InputGroup, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
// import { categoryAdd } from '../../../schema/Validation';

export const AddCompany = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const formik = useFormik({
        initialValues: {
            company_name: '',
        },
        // validationSchema: categoryAdd,

        onSubmit: (values, { resetForm }) => {
            setIsLoading(true);
            const url = 'http://127.0.0.1:8000/api/companyadd';
            const targetUrl = `${url}?company_name=${values.company_name}`;
            axios.post(targetUrl)
                .then((response) => {
                    if (response.status === 200) {
                        resetForm();
                        swal({
                            title: "Company Added Successfully",
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
                            <Col md={12}><h2 className='fw-bolder bg-light py-3 text-center' style={{ color: 'var(--primaryColor)' }}>Product Type Add</h2></Col>

                            <Col md={12}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">Product Type</InputGroup.Text>
                                    <Form.Control
                                        placeholder="Company Name"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"

                                        name="company_name"
                                        onChange={formik.handleChange}
                                        value={formik.values.company_name}
                                    />
                                </InputGroup>
                                {formik.touched.company_name && formik.errors.company_name ? (
                                    <div className='text-danger'>{formik.errors.company_name}</div>
                                ) : null}
                            </Col>
                            <Col md={12} className='text-end'>
                                <Button style={{ background: 'var(--primaryColor)', color: 'white' }} type="submit">
                                    Add
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}
