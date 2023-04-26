import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdDeleteForever } from 'react-icons/md';

import { deleteRecord } from '../../api/Axios';
import { apiDistributorDelete } from '../../api/ApiList';
import { distrbutorFetch } from '../../../frontend/frontend_api/Axios';
import { CutomizeTable } from '../../components/table/CutomizeTable';

export const ShowDistributor = () => {
    const navigate = useNavigate();
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

    const distributorColumns = [
        {
            label: "ID",
            path: 'id',
            content: (item, path) => <td>{item[path]}</td>
        },
        {
            label: "Distributor",
            path: 'distributor_name',
            content: (item, path) => <td>{item[path]}</td>
        },
        {
            label: "Owner",
            path: 'person',
            content: (item, path) => <td>{item[path]}</td>
        },
        {
            label: "Phone",
            path: 'mobile',
            content: (item, path) => <td>{item[path]}</td>
        },
        {
            label: "Email",
            path: 'email',
            content: (item, path) => <td>{item[path]}</td>
        },
        {
            label: "Social Media",
            path: 'social_media',
            content: (item, path) => <td>{item[path]}</td>
        },
        {
            label: "Action",
            path: 'id',
            content: (item, path) => (
                <td style={{ display: 'inline-block', width: '90px' }}>
                    <Link to="/admin/distributor/edit" state={item[path]} className='btn btn-success btn-sm px-1 py-0 me-2'>
                        <AiOutlineEdit />
                    </Link>
                    <button type="button" value={item[path]} onClick={deleteDistributor} className='btn btn-danger  btn-sm px-1 py-0'>
                        <MdDeleteForever />
                    </button>
                </td>
            )
        },
    ];

    const deleteDistributor = (e) => {
        e.preventDefault();
        const id = { id: e.currentTarget.value }

        swal({
            title: "Are you sure?",
            text: "You will not be able to recover this Record!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    deleteRecord(apiDistributorDelete, id)
                        .then((response) => {
                            if (response.status === 200) {
                                swal({
                                    title: "Record has been deleted!",
                                    icon: "success",
                                });

                                distrbutorFetch()
                                    .then((response) => {
                                        setData(response.data);
                                    })
                                    .catch(({ message }) => {
                                        navigate(`/errorpageprivate/${message}`);
                                    });
                            }
                        })
                        .catch(({ message }) => {
                            navigate(`/errorpageprivate/${message}`);
                        })

                } else {
                    swal("Your data is safe!");
                }
            });

    }

    return (
        <CutomizeTable columns={distributorColumns} rows={data} isLoading={isLoading} />
    )
}
