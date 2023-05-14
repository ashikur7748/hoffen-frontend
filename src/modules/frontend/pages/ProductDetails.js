import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiFillYoutube } from 'react-icons/ai';

export const ProductDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Container className='my-4'>
      <Row>
        <Col md={12}>
          <div style={{ width: '100%', height: '115px', background: '#f8f9fa', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <span style={{ borderRadius: '20px 0px 20px 0px', color: 'white', background: 'var(--primaryColor', padding: '5px 15px', fontSize: '22px', fontWeight: '600' }}>{location.state.title}</span>
          </div>
        </Col>
      </Row>

      <Row style={{ height: '60vh' }}>
        <Col md={6}>
          <div className='d-flex align-items-center' style={{ width: '100%', height: '100%', padding: '20px 10px' }}>
            <div>
              <h4 className='text-secondary'>Overview</h4>
              <p className='text-secondary text-justify'>{location.state.description}</p>
              <AiFillYoutube style={{ marginRight: '10px', color: 'red', fontSize: '25px' }} /> <Link to="/products/productdetails/videoview" state={location.state.videolink}>
                {location.state.videolink}</Link>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <div className='d-flex justify-content-center align-items-center product-details-img' style={{ width: '100%', height: '100%', position: 'relative' }}>
            <img src={"http://localhost:8000/storage/products/" + location.state.image} alt='productimage' style={{ width: '400px', height: '400px', position: 'absolute' }} />
          </div>
        </Col>
      </Row>
      <button type='button' className='btn' style={{ background: 'var(--primaryColor)', color: 'white' }} onClick={() => navigate('/products')}>Back</button>
    </Container>
  )
}
