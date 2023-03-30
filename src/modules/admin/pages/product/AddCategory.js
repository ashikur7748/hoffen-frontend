import { React, useState } from 'react';
import { useFormik } from 'formik';
import { Container, Form, Row, Col, InputGroup, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

import { categoryAdd } from '../../../../schema/Validation';

export const AddCategory = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      product_type: '',
      category: '',
    },
    validationSchema: categoryAdd,

    onSubmit: (values, { resetForm }) => {
      setIsLoading(true);
      const url = 'http://127.0.0.1:8000/api/categoryadd';
      const targetUrl = `${url}?product_type=${values.product_type}&category=${values.category}`;
      axios.post(targetUrl)
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
              <Col md={12}><h2 className='fw-bolder bg-light py-3 text-center' style={{ color: 'var(--primaryColor)' }}>Category Add</h2></Col>

              <Col md={12}>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">Product Type</InputGroup.Text>
                  <Form.Select aria-label="Default select example"
                    onChange={formik.handleChange}
                    value={formik.values.product_type}
                    name="product_type"
                  >
                    <option>--Select Product Type--</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </InputGroup>
                {formik.touched.product_type && formik.errors.product_type ? (
                  <div className='text-danger'>{formik.errors.product_type}</div>
                ) : null}
              </Col>
              <Col md={12}>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">Category</InputGroup.Text>
                  <Form.Select aria-label="Default select example"
                    onChange={formik.handleChange}
                    value={formik.values.category}
                    name="category"
                  >
                    <option>--Select Category--</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
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
