import React from 'react';
import NavBar from '../NavBar/NavBar';

const AppLayout = ({ children }) => {
    return (
        <div className='app-wrap'>
            <NavBar />
            {children}
        </div>
    );
};

export default AppLayout;
