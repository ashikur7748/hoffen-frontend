import React from 'react';

export const Loader = () => {
  return (
    <div className='d-flex justify-content-center'>
        <button className="btn" style={{background: 'var(--primaryColor)',color:'white'}} type="button" disabled>
            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            Loading...
        </button>
    </div>
  )
}
