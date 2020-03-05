import styled from 'styled-components';

import { Navbar, Nav } from 'react-bootstrap';


export const StyledNavbar = styled(Navbar)`
    width: 100%;
    height: 80px;
    position: fixed;
    background-color: white;
    opacity: 95%;
`;

export const StyledNav = styled(Nav)`
    font-weight: 500;
    font-size: 15px;
    margin-right: 11px;
    color: black;
`;

export const StyledLink = styled(Nav.Link)`
    color: black;
`;

export const ButtonWrapper = styled.div`
    margin-right: 78px;
    margin-top: -3px;
`;

export const BrandWrapper = styled(Navbar.Brand)`
    margin-left: 78px;
    margin-top: -20px;
    font-size: 40px;
    font-weight: 600;
`;
