import React from 'react';
import {Container,Row, Col} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const ProductDetails = () => {
  const navigate = useNavigate();
  return (
    <Container className='my-4'>
        <Row>
            <Col md={12}>
              <div style={{width:'100%',height:'115px',background: '#f8f9fa',display: 'flex',justifyContent:'center',alignItems:'center'}}>
                <span style={{borderRadius:'20px 0px 20px 0px',color:'white',background:'var(--primaryColor',padding:'5px 15px',fontSize:'22px',fontWeight:'600'}}>Puduct Title</span>
              </div>
            </Col>
        </Row>

        <Row style={{height:'60vh'}}>
          <Col md={6}>
              <div className='d-flex align-items-center' style={{width:'100%',height:'100%',padding:'20px 10px'}}>
              <div>
              <h4 className='text-secondary'>Overview</h4>
                <p className='text-secondary text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                <br/>
                <br/>
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
              </div>
              </div>
          </Col>
          <Col md={6}>
            <div className='d-flex justify-content-center align-items-center product-details-img' style={{width:'100%',height:'100%',position:'relative'}}>
              <img src='../../../../assets/images/products/product1.png' alt='productimage' style={{width:'400px',height:'400px',position:'absolute'}}/>
            </div>
          </Col>
        </Row>
        <button type='button' className='btn' style={{background:'var(--primaryColor)',color:'white'}} onClick={()=> navigate('/diagnostic')}>Back</button>
    </Container>
  )
}
