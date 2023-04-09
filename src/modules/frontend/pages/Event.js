import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ImLocation2 } from 'react-icons/im';
import { Link, useNavigate } from 'react-router-dom';
import moment from 'moment/moment';
import { apiEventShow } from '../../admin/api/ApiList';
import { Loader } from '../../admin/components/loader/Loader';
import { show } from '../../admin/api/Axios';


export default function Event() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    show(apiEventShow)
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
          <h2 style={{ color: 'var(--primaryColor' }}>Join Our Event</h2>
          <p className='text-secondary'>An event can be described as a public assembly for the purpose of celebration, education, marketing or reunion.</p>
        </Col>
      </Row>
      <Row>


        {isLoading ? <Loader /> : data.length !== 0 ?
          data.map((item, index) => (
            <Col md={12}>
              <div className='d-flex border rounded flex-xs-column text-scondary mb-3' key={index}>
                <div style={{ width: '60%', height: '300px', overflow: 'hidden', position: 'relative' }}>
                  <img src={"http://localhost:8000/storage/event/" + item.image} alt='event img' style={{ position: 'absolute', width: '100%', height: '100%' }} />
                </div>

                <div className='w-100 px-3 py-5'>
                  <h4 style={{ color: 'var(--primaryColor)' }}>{moment(item.datetime).format('MMMM Do YYYY, h:mm:ss a')}</h4>
                  <h6 className='mt-4'>{TruncateString(item.title, 70) + ".... "}</h6>
                  <h6><ImLocation2 className='me-2' />{TruncateString(item.venue, 70) + ".... "}</h6>
                  <p className='mt-2'>{TruncateString(item.description, 97) + ".... "}</p>
                  <Link to='/event/details' state={item}>Read More</Link>
                </div>
              </div>
            </Col>
          )) : <h4 className='text-danger text-center'>No Record Found</h4>
        }
      </Row>
    </Container>
  )
}
