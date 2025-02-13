import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div className="d-flex mt-5" style={{ minHeight: '100vh' }}>
                {/* Sidebar positioned below the header */}
                <div className="d-none d-md-block" style={{ width: '250px', zIndex: 1020 }}>
                    <Sidebar />
                </div>

                {/* Main content section */}
                <div className="flex-grow-1 ms-0 ms-md-3 ps-0 ps-md-3" style={{ marginTop: '20px' }}>
                    {children}
                </div>
            </div>
        </>
    );
};

export default Layout;
