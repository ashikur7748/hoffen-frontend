import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment/moment';

export const EventDetails = () => {
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

            <Row>
                <Col md={6}>
                    <div className='d-flex align-items-center' style={{ width: '100%', height: '100%', padding: '20px 10px' }}>
                        <div>
                            <h4 style={{ color: 'var(--primaryColor)' }}>{moment(location.state.datetime).format('MMMM Do YYYY, h:mm:ss a')}</h4>
                            <h6 style={{ color: 'var(--primaryColor)' }}>{location.state.venue}</h6>

                            <p className='text-secondary text-justify'>{location.state.description}</p>
                        </div>
                    </div>
                </Col>
                <Col md={6}>
                    <div className='d-flex justify-content-center align-items-center product-details-img' style={{ width: '100%', height: '100%', position: 'relative' }}>
                        <img src={"http://localhost:8000/storage/event/" + location.state.image} alt='image' style={{ width: '400px', height: 'auto', position: 'absolute' }} />
                    </div>
                </Col>
            </Row>
            <button type='button' className='btn' style={{ background: 'var(--primaryColor)', color: 'white' }} onClick={() => navigate('/event')}>Back</button>
        </Container>
    )

}
