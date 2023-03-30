import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function Footer() {
  return (
    <Container fluid>
        <Row>
            <Col className='text-center bg-light py-3'>
            Copyright © 2023 Hoffen Limited. All Rights Reserved.
            </Col>
        </Row>
    </Container>
  )
}
