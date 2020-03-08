import React from 'react';

import { Navbar } from 'react-bootstrap';

import ButtonPrimary from '../button-primary/button-primary';

import { 
    StyledNavbar, 
    BrandWrapper, 
    StyledNav,  
    StyledItem, 
    Img,  
    ButtonWrapper,
    UserProfile  } 
    from './navbar-main-page.styles';

import BrandLogo from  '../../assets/images/asset6.JPG';
import SearchIcon from '../../assets/icons/search.svg';
import SaveIcon from '../../assets/icons/save.two.jpg';
import NotificationIcon from '../../assets/icons/alarm.svg';




    const NavbarMainPage = () => (
        <>
            <StyledNavbar>
                <BrandWrapper><Navbar.Brand  href="#home"> <img src={BrandLogo} alt="brand-logo"/> <span>Medium</span> </Navbar.Brand></BrandWrapper>
                <StyledNav className="ml-auto nav-items">
                    <StyledItem><img src={SearchIcon} alt="search-icon"/></StyledItem>
                    <StyledItem> <Img><img  src={SaveIcon} alt="save-icon"/></Img></StyledItem>
                    <StyledItem><img src={NotificationIcon} alt="notification-icon"/></StyledItem>
                    <ButtonWrapper>
                        <ButtonPrimary updateBtn> </ButtonPrimary>
                    </ButtonWrapper>
                    <UserProfile></UserProfile>
                </StyledNav>
            </StyledNavbar>
        </>
    );

export default NavbarMainPage;