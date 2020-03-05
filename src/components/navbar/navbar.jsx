import React from 'react';

import { Nav, Navbar } from 'react-bootstrap';

import ButtonPrimary from '../button-primary/button-primary';

import { StyledNavbar, StyledNav, StyledLink, ButtonWrapper, BrandWrapper } from './navbar.styles';





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