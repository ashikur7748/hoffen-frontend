import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function About() {
  return (
    <Container className='my-4'>
      <Row>
        <Col className='text-center'>
          <h2 style={{ color: 'var(--primaryColor' }}>About Us</h2>
          {/* <p className='text-secondary'>Please contact us any time. We will provide 24/7 hour service</p> */}
        </Col>
      </Row>
      <Row className='mt-5' style={{ height: '65.7vh' }}>
        <Col md={3} style={{ height: '310px' }}>
          <div style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px', width: '100%', height: '100%', borderRadius: '5px' }}>
            <img src="/assets/images/aboutus/ceo.jpg" alt="ceo image" width="310px" height="310px" className='rounded' />
          </div>
        </Col>

        <Col md={9}>
          <h5 className='fw-bold'>
            Md. Nasir Uddin Ahmed
            <br />
            Chairman
          </h5>
          <p>
            Md. Nasir has been in Internet industry since 1997. He is one of the very early satellite and telecommunication business entrepreneurs in Bangladesh. Also, he is the chairman of the other three ventures, i.e Orbit (Home & SOHO internet service), Dhakacolo (Data center) and Creative Bangladesh (System Integration wing).
          </p>
          <p>
            He contributed significantly to build technology infrastructure in various leading internet companies since it’s inception in Bangladesh. He served as the CTO in Mango Teleservices Limited, the first IGW company of Bangladesh. He also worked in Ranks IIT and in Agni Systems at senior technology positions.
            He contributed significantly to build technology infrastructure in various leading internet companies since it’s inception in Bangladesh. He served as the CTO in Mango Teleservices Limited, the first IGW company of Bangladesh. He also worked in Ranks IIT and in Agni Systems at senior technology positions.
          </p>
        </Col>
      </Row>
    </Container>
  )
}
