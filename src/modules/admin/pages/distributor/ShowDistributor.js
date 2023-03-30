import React, { useEffect, useRef, useState } from 'react';
import { Container, Form, Row, Col, InputGroup, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { SiMicrosoftexcel } from 'react-icons/si';
import { FaRegEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';

import { DownloadTableExcel } from 'react-export-table-to-excel';

import { distrbutorFetch } from '../../../frontend/frontend_api/Axios';
import { Loader } from './../../components/loader/Loader';

export const ShowDistributor = () => {
    const navigate = useNavigate();
    const tableRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        distrbutorFetch()
            .then((response) => {
                setData(response.data);
                setIsLoading(false);
            })
            .catch(({ message }) => {
                navigate(`/errorpageprivate/${message}`);
            });
    }, []);

    return (
        <Container>
            <Row>
                <Col>
                    <div class="table-responsive">
                        <table className="table-bordered table-hover" style={{ width: '100%' }} ref={tableRef}>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Distributor</th>
                                    <th>Owner</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th>Social Link</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            {isLoading ?
                                <tbody>
                                    <td colSpan={7}><Loader /></td>
                                </tbody> :
                                data.length !== 0 ?
                                    data.map((row, key) => (
                                        <tbody>
                                            <td>{key + 1}</td>
                                            <td>{row.distributor_name}</td>
                                            <td>{row.person}</td>
                                            <td>{row.mobile}</td>
                                            <td>{row.email}</td>
                                            <td>{row.social_media}</td>
                                            <td>
                                                <Link to="" className='btn btn-primary btn-sm px-1 py-0 me-3'><FaRegEdit /></Link>
                                                <Link to="" className='btn btn-danger  btn-sm px-1 py-0'><MdDeleteForever /></Link>
                                            </td>
                                        </tbody>
                                    )) :
                                    <tbody>
                                        <td colSpan={7} className='text-danger text-center'>No Record Found</td>
                                    </tbody>
                            }

                        </table>

                        <div className='mt-3 float-right'>
                            <DownloadTableExcel
                                filename="Order List"
                                sheet="Data"
                                currentTableRef={tableRef.current}
                            >
                                <button className='btn btn-success'><SiMicrosoftexcel style={{ fontSize: '18px', marginRight: '6px' }} /> Export</button>
                            </DownloadTableExcel>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
