import React from 'react';
import './admin.css';  // Import CSS buat styling
import Sidebar from './sidebar';
import Header from './header';

const admin = () => {
    return (
        <div className="app">
      <Sidebar />
      <div className="main">
        <Header />
      <b className='putih'>Pilih Dashboard untuk melihat preview dan Pilih edit Content untuk mengedit</b>
      </div>
    </div>
    
    );
}

export default admin;
