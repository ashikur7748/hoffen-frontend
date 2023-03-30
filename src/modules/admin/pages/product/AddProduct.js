import { React, useState } from 'react';
import { useFormik } from 'formik';
import { Container, Form, Row, Col, InputGroup, Button } from 'react-bootstrap';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddProduct() {
  const [selectedFile, setSelectedFile] = useState();
  // const imageViews = URL.createObjectURL(selectedFile);

  // const productAdd = async () => {
  //   try {
  //     const {data} = await axios.post(`http://localhost:8000/api/productadd?cat_id=${values.category}&title=${values.title}&description=${values.description}&product_image=${values.photo}`);
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const formik = useFormik({
    initialValues: {
      title: '',
      category: '',
      description: '',
      photo: '',
    },
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
      // alert(URL.createObjectURL(values.photo));
      // setSelectedFile(values.photo);
      axios.post(`http://localhost:8000/api/productadd?cat_id=${values.category}&title=${values.title}&description=${values.description}&product_image=${values.photo}`)
        .then(function (response) {
          // console.log(response.statusText);
          toast.success('Product Added Successfully', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        })
        .catch(function (error) {
          console.log(error);
        });
      // try {
      //   const { response } = axios.post(`http://localhost:8000/api/productadd?cat_id=${values.category}&title=${values.title}&description=${values.description}&product_image=${values.photo}`);
      //   console.log(response);

      // } catch (error) {
      //   console.log(error);
      // }





    },
  });

  const removeImageHandler = () => {
    setSelectedFile();
  }

  return (
    <Container>
      <Form onSubmit={formik.handleSubmit} encType="multipart/form-data">
        <Row className='d-flex justify-content-center align-items-center' style={{ height: '80vh' }}>
          <Col md={5}>
            <Row className='border rounded p-3'>
              <Col md={12}><h2 className='fw-bolder bg-light py-3 text-center' style={{ color: 'var(--primaryColor)' }}>Product Add</h2></Col>
              <Col md={12}>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
                  <Form.Control
                    placeholder="Title"
                    aria-label="Username"
                    aria-describedby="basic-addon1"

                    name="title"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                  />
                </InputGroup>
              </Col>
              <Col md={12}>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">Category</InputGroup.Text>
                  <Form.Select aria-label="Default select example"
                    onChange={formik.handleChange}
                    value={formik.values.category}

                    name="category"
                  >
                    <option>Select Category</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </InputGroup>
              </Col>

              <Col md={12}>
                <InputGroup className="mb-3">
                  <InputGroup.Text>Description</InputGroup.Text>
                  <Form.Control as="textarea" aria-label="With textarea"
                    onChange={formik.handleChange}
                    value={formik.values.description}

                    name="description"
                  />
                </InputGroup>
              </Col>
              <Col md={12}>
                <Form.Group controlId="formFile" className="mb-3">
                  <input className='form-control' name="photo" type="file"
                    accept='image/*'
                    onChange={(e) => {
                      formik.setFieldValue('photo', e.currentTarget.files[0].name);
                      setSelectedFile(e.target.files[0]);
                      // console.log( e.target.files[0]);
                    }}

                  />
                </Form.Group>
              </Col>
              {selectedFile &&
                <Col md={12}>
                  <div style={{ width: '200px', height: '250px', margin: 'auto' }} className='rounded bg-light'>
                    <img src={URL.createObjectURL(selectedFile)} alt=" Preview" width="200px" height="200px" />
                    <button type='button' onClick={removeImageHandler} className='btn btn-danger w-100'>Remove</button>
                  </div>
                </Col>}
              <Col md={12} className='text-end'>
                <Button style={{ background: 'var(--primaryColor)', color: 'white' }} type="submit">
                  Submit
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}
