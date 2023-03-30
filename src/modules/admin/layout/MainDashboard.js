import React from 'react';
import { Sidebar } from './Sidebar';
import '../../../admin.css';
import { Header } from './Header';

export const MainDashboard = ({children}) => {
  return (
    <div className='wrapper'>
        <aside className='sidebar'>
            <Sidebar />
        </aside>
        <div className='content'>
            <Header />
            <div className='container-fluid mt-3'>
                {children}
            </div>
        </div>
    </div>
  )
}
