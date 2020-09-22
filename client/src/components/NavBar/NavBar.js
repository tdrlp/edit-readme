import React from 'react';
import {
    Alignment,
    AnchorButton,
    Divider,
    Icon,
    Navbar,
} from '@blueprintjs/core';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className='navbar-wrap'>
            <Navbar className='bp3-dark'>
                <Navbar.Group align={Alignment.LEFT}>
                    <Icon icon='code-block' iconSize='24px' />
                    <Divider />
                    <Navbar.Heading>README - Live Editor</Navbar.Heading>
                </Navbar.Group>
                <Navbar.Group align={Alignment.RIGHT}>
                    <AnchorButton
                        href='https://github.com/isoyute/edit-readme'
                        target='_blank'
                        icon='git-new-branch'
                        text='GitHub'
                    />
                </Navbar.Group>
            </Navbar>
        </div>
    );
};

export default NavBar;
