import React from 'react';
export const ErrorPage = () => {
  return (
    <div className='text-center w-100 d-flex justify-content-center align-items-center' style={{ height: '80vh' }}>
      <div>
        <h1 className='text-danger'>404 NOT FOUND</h1>
        <p>Opps, it seems that this page does not exist here.</p>
      </div>
    </div>
  )
}
