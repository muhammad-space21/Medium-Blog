import styled, {css} from 'styled-components';

import { Navbar, Nav } from 'react-bootstrap';


export const StyledNavbar = styled(Navbar)`
    width: 100%;
    height: 80px;
    background-color: white;
    ${props => props.navbarShadow && css` box-shadow: 5px 10px 5px red `} 
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
    padding-left: 300px;
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
        width: 45px;
        height: 30px;
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
    width: 33px;
    height: 33px;
    border-radius: 50px;
    margin-right: 90px;
    margin-top: 10px;
    background-color: #EC407A;
    @media screen and ( max-width: 1200px ) {
    margin-right: 10px;
    }
`;


