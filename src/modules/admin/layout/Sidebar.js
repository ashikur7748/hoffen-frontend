import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillDashboard } from 'react-icons/ai';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';

export const Sidebar = () => {

    return (
        <>
            <div className='band'>
                <img src='../../../../assets/images/logo/logo.png' alt='logo' />
            </div>

            <Accordion>
                <Accordion.Item eventKey="0">
                    <Link to="/dashboard" className='active nav-link p-2'>
                        <span className='icons'><AiFillDashboard /></span>
                        Dashboard
                    </Link>
                </Accordion.Item>

                <Accordion.Item eventKey="9">
                    <Accordion.Header>Category</Accordion.Header>
                    <Accordion.Body className='text-center p-0'>
                        <ListGroup>
                            <ListGroup.Item>
                                <Link to="/admin/category/add" className='nav-link'>
                                    Add Category
                                </Link>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Link to="/admin/category/show" className='nav-link'>
                                    Show Category
                                </Link>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Link to="/admin/subcategory/add" className='nav-link'>
                                    Add Sub Category
                                </Link>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Link to="/admin/subcategory/show" className='nav-link'>
                                    Show Sub Category
                                </Link>
                            </ListGroup.Item>
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header>Distributor</Accordion.Header>
                    <Accordion.Body className='text-center p-0'>
                        <ListGroup>
                            <ListGroup.Item>
                                <Link to="/admin/distributor/add" className='nav-link'>
                                    Add
                                </Link>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Link to="/admin/distributor/show" className='nav-link'>
                                    Show
                                </Link>
                            </ListGroup.Item>
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header>Product</Accordion.Header>
                    <Accordion.Body className='text-center p-0'>
                        <ListGroup>
                            <ListGroup.Item>
                                <Link to="/admin/product/add" className='nav-link'>
                                    Add Product
                                </Link>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Link to="/admin/product/show" className='nav-link'>
                                    Show Product
                                </Link>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Link to="/orderlist" className='nav-link'>
                                    Show Order
                                </Link>
                            </ListGroup.Item>
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Contact Info</Accordion.Header>
                    <Accordion.Body className='text-center p-0'>
                        <ListGroup>
                            <ListGroup.Item>
                                <Link to="/admin/contactinfo/show" className='active nav-link'>
                                    Show
                                </Link>
                            </ListGroup.Item>
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Event</Accordion.Header>
                    <Accordion.Body className='text-center p-0'>
                        <ListGroup>
                            <ListGroup.Item>
                                <Link to="/admin/event/add" className='active nav-link'>
                                    Add
                                </Link>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Link to="/admin/event/show" className='active nav-link'>
                                    Show
                                </Link>
                            </ListGroup.Item>
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>News</Accordion.Header>
                    <Accordion.Body className='text-center p-0'>
                        <ListGroup>
                            <ListGroup.Item>
                                <Link to="/admin/news/add" className='active nav-link'>
                                    Add
                                </Link>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Link to="/admin/news/show" className='active nav-link'>
                                    Show
                                </Link>
                            </ListGroup.Item>
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                    <Accordion.Header>Career</Accordion.Header>
                    <Accordion.Body className='text-center p-0'>
                        <ListGroup>
                            <ListGroup.Item>
                                <Link to="/admin/contactinfo/show" className='active nav-link'>
                                    Add
                                </Link>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Link to="/admin/contactinfo/show" className='active nav-link'>
                                    Show
                                </Link>
                            </ListGroup.Item>
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                    <Accordion.Header>Notice</Accordion.Header>
                    <Accordion.Body className='text-center p-0'>
                        <ListGroup>
                            <ListGroup.Item>
                                <Link to="/admin/contactinfo/show" className='active nav-link'>
                                    Add
                                </Link>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Link to="/admin/contactinfo/show" className='active nav-link'>
                                    Show
                                </Link>
                            </ListGroup.Item>
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="8">
                    <Accordion.Header>Support</Accordion.Header>
                    <Accordion.Body className='text-center p-0'>
                        <ListGroup>
                            <ListGroup.Item>
                                <Link to="/admin/contactinfo/show" className='active nav-link'>
                                    Add
                                </Link>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Link to="/admin/contactinfo/show" className='active nav-link'>
                                    Show
                                </Link>
                            </ListGroup.Item>
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}
