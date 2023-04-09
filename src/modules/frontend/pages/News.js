import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { show } from '../../admin/api/Axios';
import { apiNewsShow } from '../../admin/api/ApiList';
import { Loader } from '../../admin/components/loader/Loader';
import moment from 'moment/moment';

export default function News() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    show(apiNewsShow)
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch(({ message }) => {
        navigate(`/errors/${message}`);
      });
  }, []);

  const TruncateString = (description, num) => {
    if (description.length > num) {
      return description.slice(0, num);
    } else {
      return description;
    }
  }
  return (
    <Container className='my-4'>
      <Row>
        <Col className='text-center'>
          <h2 style={{ color: 'var(--primaryColor' }}>News</h2>
          <p className='text-secondary'>Please contact our sales representatives to see the availability of our products in your country</p>
        </Col>
      </Row>

      <Row className='mt-4'>
        {isLoading ? <Loader /> : data.length !== 0 ?
          data.map((item, index) => (
            <Col md={4}>
              <Card style={{ width: '100%' }} key={index}>
                <Card.Img variant="top" src={"http://localhost:8000/storage/news/" + item.image} width="100%" height="266px" />
                <Card.Body>
                  <Card.Title style={{ color: 'var(--primaryColor' }}>31 March 2023</Card.Title>
                  <Card.Title>{TruncateString(item.title, 23) + ".... "}</Card.Title>
                  <Card.Text>
                    {TruncateString(item.description, 97) + ".... "}
                    <Link to="/news/details" state={item}>Read More</Link>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          )) : <h4 className='text-danger text-center'>No Record Found</h4>
        }

      </Row>
    </Container>

  )
}
