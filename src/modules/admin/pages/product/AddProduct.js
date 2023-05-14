import { React, useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { Container, Form, Row, Col, InputGroup, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

import { productValidationSchema } from '../../../../schema/Validation';
import { store } from '../../api/Axios';
import { showCategory, showSubCategory } from '../../api/Axios';
import { apiCategoryShow, apiSubCategoryShow, apiProductAdd } from '../../api/ApiList';

export default function AddProduct() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const [categoryList, setCategoryList] = useState([]);
  const [subCategorytList, setSubCategoryList] = useState([]);

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

  const formik = useFormik({
    initialValues: {
      category: '',
      sub_category: '',
      title: '',
      description: '',
      videolink: '',
      image: '',
    },
    validationSchema: productValidationSchema,

    onSubmit: (values, { resetForm }) => {
      setIsLoading(true);
      const formData = new FormData();
      formData.append('category_id', values.category);
      formData.append('subcategory_id', values.sub_category);
      formData.append('title', values.title);
      formData.append('description', values.description);
      formData.append('videolink', values.videolink);
      formData.append('image', values.image);

      store(apiProductAdd, formData)
        .then((response) => {
          if (response.status === 200) {
            resetForm();
            setSelectedFile();
            swal({
              title: "Product Added Successfully",
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

  const removeImageHandler = () => {
    setSelectedFile();
  }

  return (
    <Container>
      <Form onSubmit={formik.handleSubmit} encType="multipart/form-data">
        <Row className='d-flex justify-content-center align-items-center' style={{ height: '80vh' }}>
          <Col md={5}>
            <Row className='border rounded p-3'>
              <Col md={12}><h2 className='fw-bolder bg-light py-3 text-center' style={{ color: 'var(--primaryColor)' }}>Add Product</h2></Col>
              <Col md={12}>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">Category</InputGroup.Text>
                  <Form.Select aria-label="Default select example"
                    onChange={formik.handleChange}
                    value={formik.values.category}
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
                {formik.touched.category && formik.errors.category ? (
                  <div className='text-danger'>{formik.errors.category}</div>
                ) : null}
              </Col>
              <Col md={12}>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">Sub Category</InputGroup.Text>
                  <Form.Select aria-label="Default select example"
                    onChange={formik.handleChange}
                    value={formik.values.sub_category}
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
                {formik.touched.sub_category && formik.errors.sub_category ? (
                  <div className='text-danger'>{formik.errors.sub_category}</div>
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
                  <InputGroup.Text>Description</InputGroup.Text>
                  <Form.Control as="textarea" aria-label="With textarea"
                    onChange={formik.handleChange}
                    value={formik.values.description}
                    name="description"
                  />
                </InputGroup>
                {formik.touched.description && formik.errors.description ? (
                  <div className='text-danger'>{formik.errors.description}</div>
                ) : null}
              </Col>
              <Col md={12}>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">Video Link</InputGroup.Text>
                  <Form.Control
                    placeholder="Video link"
                    aria-label="videolink"
                    name="videolink"
                    onChange={formik.handleChange}
                    value={formik.values.videolink}
                  />
                </InputGroup>
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
              {selectedFile &&
                <Col md={12}>
                  <div style={{ width: '200px', height: '250px', margin: 'auto' }} className='rounded bg-light'>
                    <img src={URL.createObjectURL(selectedFile)} alt=" Preview" width="200px" height="200px" />
                    <button type='button' onClick={removeImageHandler} className='btn btn-danger w-100'>Remove</button>
                  </div>
                </Col>}
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
