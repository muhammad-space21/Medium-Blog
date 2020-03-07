import styled  from 'styled-components';

import { Navbar, Nav } from 'react-bootstrap';


export const StyledNavbar = styled(Navbar)`
    width: 100%;
    height: 80px;
    background-color: white;
`;

export const BrandWrapper = styled(Navbar.Brand)`
    margin-left: 78px;
    display: flex;
    align-items: center;
    @media screen and ( max-width: 750px ) {
        margin-left: 0px;
    }
    span {
        font-size: 25px;
        font-weight: 600;
        @media screen and ( max-width: 750px ) {
            display: none;
        }
    }

    img {
        width: 40px;
        height: 40px;
        display: none;
        @media screen and ( max-width: 750px ) {
            display: block;
        }
    }
`;
export const StyledNav = styled(Nav)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`;

export const StyledItem = styled(Nav.Item)`
    img {
        width: 18px;
        height: 18px;
        margin-right: 20px;
        margin-top: 10px;
        &:hover {
            cursor: pointer;
        }
    }
`;

export  const Img = styled.div`
    img {
        @media screen and ( max-width: 750px) {
            display: none;
        }
    }
`;


export const ButtonWrapper = styled.div`
    margin-top: 10px;
    margin-right: 20px;
    @media screen and ( max-width: 750px ) {
        margin-right: 0px;
        display: none;
    }
`;

export const UserProfile = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 50px;
    margin-right: 90px;
    margin-top: 10px;
    background-color: #EC407A;

`;


