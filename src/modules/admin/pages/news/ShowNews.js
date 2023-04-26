import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import moment from 'moment/moment';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdDeleteForever } from 'react-icons/md';

import { deleteRecord } from '../../api/Axios';
import { apiNewsDelete } from '../../api/ApiList';
import { newsFetch } from '../../../frontend/frontend_api/Axios';
import { CutomizeTable } from '../../components/table/CutomizeTable';


export const ShowNews = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        newsFetch()
            .then((response) => {
                setData(response.data);
                setIsLoading(false);
            })
            .catch(({ message }) => {
                navigate(`/errorpageprivate/${message}`);
            });
    }, []);

    const columns = [
        {
            label: "ID",
            path: 'id',
            content: (item, path) => <td>{item[path]}</td>
        },
        {
            label: "Image",
            path: 'image',
            content: (item, path) => <td><img src={"http://localhost:8000/storage/news/" + item[path]} width="80px" height="80px" alt='event image' /></td>
        },

        {
            label: "Title",
            path: 'title',
            content: (item, path) => <td>{item[path]}</td>
        },

        {
            label: "Description",
            path: 'description',
            content: (item, path) => <td>{item[path]}</td>
        },
        {
            label: "DateTime",
            path: 'datetime',
            content: (item, path) => <td>{moment(item[path]).format('MMMM Do YYYY, h:mm:ss a')}</td>
        },

        {
            label: "Action",
            path: 'id',
            content: (item, path) => (
                <td style={{ display: 'inline-block', width: '90px' }}>
                    <Link to="/admin/news/edit" state={item[path]} className='btn btn-success btn-sm px-1 py-0 me-2'>
                        <AiOutlineEdit />
                    </Link>
                    <button type="button" value={item[path]} onClick={deleteNews} className='btn btn-danger  btn-sm px-1 py-0'>
                        <MdDeleteForever />
                    </button>
                </td>
            )
        },
    ];

    const deleteNews = (e) => {
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
                    deleteRecord(apiNewsDelete, id)
                        .then((response) => {
                            if (response.status === 200) {
                                swal({
                                    title: "Record has been deleted!",
                                    icon: "success",
                                });

                                newsFetch()
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
        <CutomizeTable columns={columns} rows={data} isLoading={isLoading} />
    )
}


