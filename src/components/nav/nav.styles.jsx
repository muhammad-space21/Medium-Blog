import styled, {css} from 'styled-components';

import { Nav } from 'react-bootstrap';


export const NavStyled = styled(Nav)`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const NavLinkStyled = styled(Nav.Link)`
    color: grey;
    font-size: 13px;
    text-transform: uppercase; 
    &:hover {
        color: black;
    }
`;

export const Home = styled.span`
    color: black;
`;