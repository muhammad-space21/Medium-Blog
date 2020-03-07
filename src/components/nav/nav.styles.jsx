import styled from 'styled-components';

import { Nav } from 'react-bootstrap';


export const NavStyled = styled(Nav)`
    width: 100%;
    height: 50px;
    /* position: fixed; */
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const NavLinkStyled = styled(Nav.Link)`
    color: grey;
    font-size: 15px;
    &:hover {
        color: black;
    }
`;