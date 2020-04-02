import styled from 'styled-components';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const NavStyled = styled(Nav)`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 10px;
`;

export const NavItem = styled(Nav.Item)`
    margin-left: 5px;
    margin-right: 5px;
`;

export const NavLinkStyled = styled(Link)`
    color: grey;
    font-size: 13px;
    line-height: 10px;
    font-weight: 300;
    text-transform: uppercase;

    ${({ active }) => active && `
        color:black;
    `}
    &:hover {
        color: black;
        text-decoration: none;
    }
`;
