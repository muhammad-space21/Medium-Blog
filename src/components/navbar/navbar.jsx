import React from 'react';

import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';


import ButtonPrimary from '../button-primary/button';

// Style of Navbar 
const StyledNavbar = styled(Navbar)`
    width: 100%;
    height: 80px;
    position: fixed;
    background-color: white;
    opacity: 95%;
`;

const StyledNav = styled(Nav)`
    font-weight: 500;
    font-size: 15px;
    margin-right: 11px;
    color: black;
`;
const StyledLink = styled(Nav.Link)`
    color: black;
`;
const ButtonWrapper = styled.div`
    margin-right: 78px;
    margin-top: -3px;
`;
const BrandWrapper = styled(Navbar.Brand)`
    margin-left: 78px;
    margin-top: -20px;
    font-size: 40px;
    font-weight: 600;
`;




    const NavbarMain = () => (
        <>
            <StyledNavbar  className='navbar'>
                <BrandWrapper><Navbar.Brand  href="#home">Medium</Navbar.Brand></BrandWrapper>
                <StyledNav className="ml-auto nav-items">
                <StyledLink><Nav.Link href="#home">Subscribe</Nav.Link></StyledLink>
                <StyledLink><Nav.Link href="#features">Write</Nav.Link></StyledLink>
                <StyledLink><Nav.Link href="#pricing">Sign in</Nav.Link></StyledLink>
                </StyledNav>
                <ButtonWrapper>
                    <ButtonPrimary />
                </ButtonWrapper>
            </StyledNavbar>
        </>
    );


export default NavbarMain;