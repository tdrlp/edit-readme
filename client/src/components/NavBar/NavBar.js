import React from 'react';
import { Alignment, Icon, Navbar } from '@blueprintjs/core';

const NavBar = () => {
    return (
        <div className='navbar-wrap'>
            <Navbar className='bp3-dark'>
                <Navbar.Group align={Alignment.LEFT}>
                    <Icon icon='git-new-branch' iconSize='24px' />
                    <Navbar.Heading>README - Live Editor</Navbar.Heading>
                </Navbar.Group>
            </Navbar>
        </div>
    );
};

export default NavBar;
