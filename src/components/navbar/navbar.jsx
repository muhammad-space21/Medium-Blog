import React from 'react';

import { Nav, Navbar, Container } from 'react-bootstrap';
import styled from 'styled-components';


import ButtonPrimary from '../button-primary/button';

// Style of Navbar 
const StyledNavbar = styled(Navbar)`
    width: 100%;
    height: 80px;
    position: fixed;
    background-color: white;
`;

const StyledNav = styled(Nav)`
    font-weight: 500;
    font-size: 16px;
    color: black;
    margin-right: 115px;
`;




    const NavbarMain = () => (
        <>
            <StyledNavbar  className='navbar'>
                <Container>
                <Navbar.Brand  href="#home">Medium</Navbar.Brand>
                <StyledNav className="ml-auto nav-items">
                <Nav.Link href="#home">Subscribe</Nav.Link>
                <Nav.Link href="#features">Write</Nav.Link>
                <Nav.Link href="#pricing">Sign in</Nav.Link>
                </StyledNav>
                <ButtonPrimary />
                </Container>
            </StyledNavbar>
        </>
    );


export default NavbarMain;