import styled from 'styled-components';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const NavStyled = styled(Nav)`
    width: 100%;
    max-width:768px;

    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin:auto;
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
    font-weight: 400;
    text-transform: uppercase;


    ${({ active }) => active === 'true' && `
        color:black;
    `}
    &:hover {
        color: black;
        text-decoration: none;
   
    }
`;
