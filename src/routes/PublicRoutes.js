import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import MainHeader from './../modules/frontend/Layout/MainHeader';

export default function PublicRoutes() {
  const isLogedIn = sessionStorage.getItem('user');
  return (
    <div>
        {isLogedIn ? <Navigate to="/dashboard" replace />: <MainHeader><Outlet /> </MainHeader>}
    </div>
  )
}
