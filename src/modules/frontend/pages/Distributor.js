import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserTie, FaFacebookF } from 'react-icons/fa';
import { IoMdCall } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';

import { distrbutorFetch } from '../frontend_api/Axios';
import { Loader } from '../../admin/components/loader/Loader';



export default function Distributor() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    distrbutorFetch()
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch(({ message }) => {
        navigate(`/errors/${message}`);
      });
  }, []);

  return (
    <Container className='my-4'>
      <Row>
        <Col className='text-center'>
          <h2 style={{ color: 'var(--primaryColor' }}>Join Our Distribution Network</h2>
          <p className='text-secondary'>Please contact our sales representatives to see the availability of our products in your country</p>
        </Col>
      </Row>
      <Row className='mt-5'>
        {isLoading ? <Loader /> : data.length !== 0 ?
          data.map((item, index) => (
            <Col md={4}>
              <div className='distributor-box' key={index}>
                <h4>{item.distributor_name}</h4>
                <div className='address'>
                  <ul>
                    <li>
                      <FaUserTie className='me-3' />
                      {item.person}
                    </li>
                    <li>
                      <IoMdCall className='me-3' />
                      {item.mobile}
                    </li>
                    <li>
                      <MdEmail className='me-3' />
                      {item.email}
                    </li>
                    <li>
                      <FaFacebookF className='me-3' />
                      <a href={item.social_media} target='_blank'>{item.social_media}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          )) : <h4 className='text-danger text-center'>No Record Found</h4>
        }

      </Row>
    </Container>
  )
}
