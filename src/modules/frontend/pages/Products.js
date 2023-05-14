import { React, useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';

import { apiCategoryShow } from '../../admin/api/ApiList';
import { showCategory } from '../../admin/api/Axios';
import { productFetch, productCategoryWiseFetch } from '../frontend_api/Axios';
import { Loader } from '../../admin/components/loader/Loader';

export const Products = () => {
    const navigate = useNavigate();
    const cat_id = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [categoryList, setCategoryList] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {

        // productCategoryWiseFetch(cat_id)
        //     .then((response) => {
        //         setData(response.data);
        //         setIsLoading(false);
        //     })
        //     .catch(({ message }) => {
        //         navigate(`/errors/${message}`);
        //     });

        productFetch()
            .then((response) => {
                setData(response.data);
                setIsLoading(false);
            })
            .catch(({ message }) => {
                navigate(`/errors/${message}`);
            });


    }, []);

    useEffect(() => {
        showCategory(apiCategoryShow)
            .then((response) => {
                setCategoryList(response.data);
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
    const categoryWiseProductHange = (e) => {
        var cat_id = { cat_id: e.currentTarget.value }
        productCategoryWiseFetch(cat_id)
            .then((response) => {
                setData(response.data);
                setIsLoading(false);
            })
            .catch(({ message }) => {
                navigate(`/errors/${message}`);
            });
    }
    return (
        <Container className='my-4'>
            <Row>
                <Col md={3} sm={6} className="mb-4">


                    <Card style={{ width: '100%' }}>
                        <Card.Header>Business Area</Card.Header>
                        <ListGroup variant="flush">
                            {
                                categoryList && categoryList.map((item, index) => (
                                    <ListGroup.Item>
                                        {/* <button type="button" value={item.id} onClick={categoryWiseProductHange} key={index}>{item.name}</button> */}
                                        <div class="d-grid gap-2">
                                            <Link to={"cat_id/" + item.id}
                                                state={item.name}
                                                style={{ background: 'rgb(16, 33, 139)', color: 'white' }}
                                                className='btn'>{item.name}</Link>
                                        </div>
                                    </ListGroup.Item>
                                ))
                            }
                        </ListGroup>
                    </Card>


                </Col>
                <Col md={9} sm={6} className="mb-4">
                    <Row>
                        {isLoading ? <Loader /> : data.length !== 0 ?
                            data.map((item, index) => (
                                <Col md={4} className='mb-4'>
                                    <Card key={index} style={{ width: '100%', height: '420px', fontSize: '15px' }}>
                                        <Card.Img variant="top" style={{ height: '240px' }} src={"http://localhost:8000/storage/products/" + item.image} />
                                        <Card.Body className='text-justify'>
                                            <Card.Title style={{ fontSize: '18px' }}>{item.title}</Card.Title>
                                            <Card.Text>
                                                {TruncateString(item.description, 35) + "..."}
                                                <Link to="/products/productdetails" state={item} className="text-primary btn">Details</Link>
                                            </Card.Text>
                                            <Link to="/productbuy" state={item.title} className='float-end btn' style={{ background: '#10218b', color: 'white' }}>Interested</Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )) : <h4 className='text-danger text-center'>No Record Found</h4>
                        }


                    </Row>
                </Col>

            </Row>
        </Container>
    )
}
