import { React, useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import swal from 'sweetalert';
import { Container, Form, Row, Col, InputGroup, Button } from 'react-bootstrap';
import { FaUserTie, FaFacebookF } from 'react-icons/fa';
import { IoMdCall } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { ImLocation2 } from 'react-icons/im';
import { contactUs } from '../../../schema/Validation';
import { useNavigate } from 'react-router-dom';


export default function Contact() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      phone: '',
      massage: '',
    },
    validationSchema: contactUs,

    onSubmit: (values, { resetForm }) => {
      setIsLoading(true);
      const url = 'http://127.0.0.1:8000/api/emailsend';
      const targetUrl = `${url}?fullname=${values.fullname}&email=${values.email}&phone=${values.phone}&massage=${values.massage}`;
      axios.post(targetUrl)
        .then((response) => {
          if (response.status === 200) {
            resetForm();
            swal({
              title: "Email Send Successfully",
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
    <>
      <Container className='mt-4'>
        <Row>
          <Col className='text-center'>
            <h2 style={{ color: 'var(--primaryColor' }}>Contact Us</h2>
            <p className='text-secondary'>Please contact us any time. We will provide 24/7 hour service</p>
          </Col>
        </Row>
        <Row className='mt-4 d-flex justify-content-center'>
          <Col md={5}>
            <Form onSubmit={formik.handleSubmit} >
              <Row>
                <Col md={12}>
                  <Row className='border rounded p-3'>
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
                          placeholder="Massage"
                        />
                      </InputGroup>
                    </Col>

                    <Col md={12} className='text-end'>
                      {isLoading ? <button className='btn' style={{ background: 'var(--primaryColor)', color: 'white' }} type="button" disabled>
                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        Sending...
                      </button> : <Button style={{ background: 'var(--primaryColor)', color: 'white' }} type="submit">
                        Send
                      </Button>}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col md={5} className='d-flex align-items-center'>
            <div className='contactus-box'>
              <h4>Hoffen International Trade Limited</h4>
              <div className='address'>
                <ul>
                  <li>
                    <ImLocation2 className='me-3' />
                    Address: Rm. L302, Bldg. 2, Skyworth Innovation Valley
                  </li>
                  <li>
                    <FaUserTie className='me-3' />
                    Minara Mimi
                  </li>
                  <li>
                    <IoMdCall className='me-3' />
                    01764237478
                  </li>
                  <li>
                    <MdEmail className='me-3' />
                    minaramimi@gmail.com
                  </li>
                  <li>
                    <FaFacebookF className='me-3' />
                    Minara Mimi
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid className='my-5'>
        <Row>
          <Col md={12}>
            <div className='map-box img-thumbnail' >
              <iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Dhaka+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}
