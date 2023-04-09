import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function Support() {
  return (
    <Container>
      <Row className='my-4'>
        <Col md={12}>
          <div className='mb-4 text-center'>
            <h4>We are provide Tranning</h4>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
          </div>
        </Col>
        <Col md={6}>
          <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/88nsm1RhgGw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </Col>

        <Col md={6}>
          <div className='rounded'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/88nsm1RhgGw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
