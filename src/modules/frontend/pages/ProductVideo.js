import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'

export const ProductVideo = () => {
    const location = useLocation();
    return (
        <Container className='my-4'>
            <Row>
                <Col>
                    <div class="ratio ratio-16x9">
                        <iframe src={location.state} title="YouTube video" allowfullscreen allow="autoplay" ></iframe>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

