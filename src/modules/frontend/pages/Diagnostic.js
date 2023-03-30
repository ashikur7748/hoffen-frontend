import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProductCard from '../components/ProductCard'

export default function Diagnostic() {
  return (
    <Container className='my-4'>
        <Row>
            <ProductCard />
        </Row>
    </Container>
  )
}
