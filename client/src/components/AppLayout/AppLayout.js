import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

const AppLayout = ({ children }) => {
    return (
        <div className='app-wrap'>
            <NavBar />
            {children}
            <Footer />
        </div>
    );
};

export default AppLayout;
