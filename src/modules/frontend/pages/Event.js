import React from 'react';
import {Container,Row, Col} from 'react-bootstrap';
import {ImLocation2} from 'react-icons/im';
import { Link } from 'react-router-dom';

export default function Event() {
  return (
    <Container className='my-4'>
      <Row>
        <Col className='text-center'>
          <h2 style={{color:'var(--primaryColor'}}>Join Our Event</h2>
          <p className='text-secondary'>An event can be described as a public assembly for the purpose of celebration, education, marketing or reunion.</p>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <div className='d-flex border rounded flex-xs-column text-scondary mb-3'>
          <div style={{width:'60%',height:'300px',overflow:'hidden',position:'relative'}}>
            <img src="/assets/images/event/event.jpg" alt='event img' style={{position:'absolute',width:'100%',height:'100%'}} />
          </div>

          <div className='w-100 px-3 py-5'>
            <h4 style={{color:'var(--primaryColor)'}}>2022 12-1 Thusday 2:4:22 PM</h4>
            <h6 className='mt-4'>The 8th National Dry Eye Conference</h6>
            <h6><ImLocation2 className='me-2'/>HUALUXE Hotels and Resorts Xiamen Haicang</h6>
            <p className='mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the Lorem Ipsum has been the industry's standard dummy text ever since the 1500s  Lorem Ipsum has been the Lorem Ipsum has been the industry's .... <Link to='/eventdetails'>Details</Link></p>
          </div>
          </div>
        </Col>
      </Row>
      </Container>
  )
}
