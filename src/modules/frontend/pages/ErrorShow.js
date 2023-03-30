import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

export const ErrorShow = () => {
    const { errors } = useParams();
    return (
        <div className='text-center w-100 d-flex justify-content-center align-items-center' style={{ height: '80vh' }}>
            <div>
                <h1 className='text-danger'>{errors && errors}</h1>
                <p>Server Error Try Again Later</p>
            </div>
        </div>
    )
}
