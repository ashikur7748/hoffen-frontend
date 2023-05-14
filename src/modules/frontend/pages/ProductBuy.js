import { React, useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import swal from 'sweetalert';
import { Container, Form, Row, Col, InputGroup, Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { order } from '../../../schema/Validation';

export default function ProductBuy() {
  const navigate = useNavigate();
  const location = useLocation();
  const [productTitle, setProductTitle] = useState(location.state);
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      phone: '',
      massage: '',
    },
    validationSchema: order,

    onSubmit: (values, { resetForm }) => {
      setIsLoading(true);
      const url = 'http://127.0.0.1:8000/api/orderproduct';
      const targetUrl = `${url}?fullname=${values.fullname}&email=${values.email}&phone=${values.phone}&productName=${productTitle}&massage=${values.massage}`;
      axios.post(targetUrl)
        .then((response) => {
          if (response.status === 200) {
            resetForm();
            swal({
              title: "Order Successfully",
              icon: "success",
            });
            setIsLoading(false);
          }
        })
        .catch(({ message }) => {
          navigate(`/errors/${message}`);
        });

    }

  });

  return (
    <Container>
      <Form onSubmit={formik.handleSubmit} >
        <Row className='d-flex justify-content-center align-items-center' style={{ height: '80.7vh' }}>
          <Col md={5}>
            <Row className='border rounded p-3'>
              <Col md={12}><h2 className='fw-bolder bg-light py-3 text-center' style={{ color: 'var(--primaryColor)' }}>Order Now</h2>
              </Col>

              <Col md={12}>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">Product</InputGroup.Text>
                  <Form.Control
                    name="producttitle"
                    value={productTitle}
                    disabled
                  />
                </InputGroup>
                {formik.touched.fullname && formik.errors.fullname ? (
                  <div className='text-danger'>{formik.errors.fullname}</div>
                ) : null}
              </Col>
              <Col md={12}>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">Fullname</InputGroup.Text>
                  <Form.Control
                    placeholder="Fullname"
                    name="fullname"
                    onChange={formik.handleChange}
                    value={formik.values.fullname}
                  />
                </InputGroup>
                {formik.touched.fullname && formik.errors.fullname ? (
                  <div className='text-danger'>{formik.errors.fullname}</div>
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
                  <InputGroup.Text>Massage</InputGroup.Text>
                  <Form.Control as="textarea" aria-label="With textarea"
                    onChange={formik.handleChange}
                    value={formik.values.massage}
                    name="massage"
                  />
                </InputGroup>
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
