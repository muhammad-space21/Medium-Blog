import styled from 'styled-components';

import { Nav } from 'react-bootstrap';


export const NavStyled = styled(Nav)`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 10px;
`;

export const NavLinkStyled = styled(Nav.Link)`
    color: grey;
    font-size: 13px;
    line-height: 10px;
    font-weight: 300;
    text-transform: uppercase; 
    &:hover {
        color: black;
    }
`;

export const Home = styled.span`
    color: black;
`;