import React from 'react';

import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

import ButtonPrimary from '../button-primary/button';

// Style of Navbar 
const NavbarStyle = styled(Navbar)`
    width: 100%;
    height: 80px;
    position: fixed;
    /* opacity: 0.5; */
    background-color: white;
    color: black;
`;
const Brand = styled(Navbar.Brand)`
    font-size: 30px;
    font-weight: 500;
`;
const NavItems = styled(Nav)`
    /* display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center; */
    color: black;
    font-size: 16px;
    font-weight: 500;
`;



    const NavbarMain = () => (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Medium</Navbar.Brand>
                <Nav className="ml-auto">
                <Nav.Link href="#home">Subscribe</Nav.Link>
                <Nav.Link href="#features">Write</Nav.Link>
                <Nav.Link href="#pricing">Sign in</Nav.Link>
                </Nav>
                <ButtonPrimary />
            </Navbar>
        </>
    );


export default NavbarMain;