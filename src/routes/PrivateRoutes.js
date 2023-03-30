import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { MainDashboard } from './../modules/admin/layout/MainDashboard';

export default function PrivateRoutes() {
const isLogedIn = sessionStorage.getItem('user');

  console.log(isLogedIn);
  return (
    <div>
        {isLogedIn ? <MainDashboard><Outlet /></MainDashboard>: <Navigate to="/login" replace />}
    </div>
  )
}
