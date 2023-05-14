import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdDeleteForever } from 'react-icons/md';

import { deleteRecord } from '../../api/Axios';
import { apiCategoryDelete } from '../../api/ApiList';
import { categoryFetch } from '../../../frontend/frontend_api/Axios';
import { CutomizeTable } from '../../components/table/CutomizeTable';

export const ShowCategory = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        categoryFetch()
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
            label: "Category Name",
            path: 'name',
            content: (item, path) => <td>{item[path]}</td>
        },

        {
            label: "Action",
            path: 'id',
            content: (item, path) => (
                <td style={{ display: 'inline-block', width: '90px' }}>
                    <Link to="/admin/category/edit" state={item[path]} className='btn btn-success btn-sm px-1 py-0 me-2'>
                        <AiOutlineEdit />
                    </Link>
                    <button type="button" value={item[path]} onClick={deleteCategory} className='btn btn-danger  btn-sm px-1 py-0'>
                        <MdDeleteForever />
                    </button>
                </td>
            )
        },
    ];

    const deleteCategory = (e) => {
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
                    deleteRecord(apiCategoryDelete, id)
                        .then((response) => {
                            if (response.status === 200) {
                                swal({
                                    title: "Record has been deleted!",
                                    icon: "success",
                                });

                                categoryFetch()
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

