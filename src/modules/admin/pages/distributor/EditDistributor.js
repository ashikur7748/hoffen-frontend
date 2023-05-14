import { React, useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { Container, Form, Row, Col, InputGroup, Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';

import { distributorValidationSchema } from '../../../../schema/Validation';
import {
    apiDistributorShow,
    apiDistributorAdd,
    apiDistributorEdit,
    apiDistributorUpdate,
    apiDistributorDelete
} from '../../api/ApiList';
import { edit, update } from '../../api/Axios';

export const EditDistributor = () => {

    const location = useLocation();
    const id = { id: location.state }

    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [distributor, setDistributor] = useState("");
    const [owner, setOwer] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [social, setSocial] = useState("");
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        edit(apiDistributorEdit, id)
            .then((response) => {
                if (response.data[0]) {
                    setDistributor(response.data[0].distributor_name);
                    setOwer(response.data[0].person);
                    setPhone(response.data[0].mobile);
                    setEmail(response.data[0].email);
                    setSocial(response.data[0].social_media);
                }

            })
            .catch(({ message }) => {
                navigate(`/errorpageprivate/${message}`);
            });
    }, []);


    const updateHandle = () => {
        setIsLoading(true);
        const formData = {
            id: location.state,
            distributor_name: distributor,
            person: owner,
            mobile: phone,
            email: email,
            social_media: social
        }

        update(apiDistributorUpdate, formData)
            .then((response) => {
                if (response.status === 200) {
                    swal({
                        title: "Updated Successfully",
                        icon: "success",
                    });
                    navigate('/admin/distributor/show');
                    setIsLoading(false);
                }
            })
            .catch(({ message }) => {
                navigate(`/errorpageprivate/${message}`);
            })
    }



    return (
        <Container>
            <Form >
                <Row className='d-flex justify-content-center align-items-center' style={{ height: '80vh' }}>
                    <Col md={5}>
                        <Row className='border rounded p-3'>
                            <Col md={12} className="mb-3">
                                <h2 className='fw-bolder bg-light py-3 text-center' style={{ color: 'var(--primaryColor)' }}>Distributor Update</h2>
                            </Col>
                            <Col md={12}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">Distributor</InputGroup.Text>
                                    <Form.Control
                                        placeholder="Distributor"
                                        name="distributor_name"
                                        onChange={(e) => setDistributor(e.target.value)}
                                        value={distributor}
                                    />
                                </InputGroup>

                            </Col>
                            <Col md={12}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">Owner</InputGroup.Text>
                                    <Form.Control
                                        placeholder="Owner"
                                        name="owner_name"
                                        onChange={(e) => setOwer(e.target.value)}
                                        value={owner}
                                    />
                                </InputGroup>

                            </Col>
                            <Col md={12}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">Phone</InputGroup.Text>
                                    <Form.Control
                                        placeholder="Phone"
                                        name="phone"
                                        onChange={(e) => setPhone(e.target.value)}
                                        value={phone}
                                    />
                                </InputGroup>

                            </Col>
                            <Col md={12}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
                                    <Form.Control
                                        placeholder="Email"
                                        name="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                    />
                                </InputGroup>

                            </Col>
                            <Col md={12}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">Social Link</InputGroup.Text>
                                    <Form.Control
                                        placeholder="URL"
                                        name="social_media"
                                        onChange={(e) => setSocial(e.target.value)}
                                        value={social}
                                    />
                                </InputGroup>

                            </Col>
                            <Col md={12} className='text-end'>
                                {isLoading ? <button className='btn' style={{ background: 'var(--primaryColor)', color: 'white' }} type="button" disabled>
                                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    Updatting...
                                </button> : <Button style={{ background: 'var(--primaryColor)', color: 'white' }} type="button" onClick={updateHandle}>
                                    Update
                                </Button>}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}

