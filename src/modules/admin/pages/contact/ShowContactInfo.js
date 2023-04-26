import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import moment from 'moment/moment';

import { fetchContactInfo } from '../../../frontend/frontend_api/Axios';
import { CutomizeTable } from '../../components/table/CutomizeTable';

export const ShowContactInfo = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchContactInfo()
            .then((response) => {
                setData(response.data);
                setIsLoading(false);
            })
            .catch(({ message }) => {
                navigate(`/errorpageprivate/${message}`);
            });
    }, []);

    const contactInfoColumns = [
        {
            label: "ID",
            path: 'id',
            content: (item, path) => <td>{item[path]}</td>
        },
        {
            label: "Fullname",
            path: 'fullname',
            content: (item, path) => <td>{item[path]}</td>
        },
        {
            label: "Email",
            path: 'email',
            content: (item, path) => <td>{item[path]}</td>
        },
        {
            label: "Phone",
            path: 'phone',
            content: (item, path) => <td>{item[path]}</td>
        },
        {
            label: "Massage",
            path: 'massage',
            content: (item, path) => <td>{item[path]}</td>
        },
        {
            label: "Created",
            path: 'created_at',
            content: (item, path) => <td>{moment(item[path]).format('LLL')}</td>
        }

    ];


    return (
        <CutomizeTable columns={contactInfoColumns} rows={data} isLoading={isLoading} />
    )
}

