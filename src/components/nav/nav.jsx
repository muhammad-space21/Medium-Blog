import React from 'react';

import { Nav } from 'react-bootstrap';

import { NavStyled, NavLinkStyled, Home } from './nav.styles';


const NavMain = () => (
    <NavStyled activeKey="/home">
            <Nav.Item>
            <NavLinkStyled href="#"><Home>HOME</Home></NavLinkStyled>
            </Nav.Item>
            <Nav.Item>
            <NavLinkStyled href="#">ONE ZERO</NavLinkStyled>
            </Nav.Item>
            <Nav.Item>
            <NavLinkStyled href="#">ELEMENTAL</NavLinkStyled>
            </Nav.Item>
            <Nav.Item>
            <NavLinkStyled href="#">GEN</NavLinkStyled>
            </Nav.Item>
            <Nav.Item>
            <NavLinkStyled href="#">ZORA</NavLinkStyled>
            </Nav.Item>
            <Nav.Item>
            <NavLinkStyled href="#">FORGE</NavLinkStyled>
            </Nav.Item>
            <Nav.Item>
            <NavLinkStyled href="#">HUMAN PARTS</NavLinkStyled>
            </Nav.Item>
            <Nav.Item>
            <NavLinkStyled href="#">MARKER</NavLinkStyled>
            </Nav.Item>
            <Nav.Item>
            <NavLinkStyled href="#">LEVEL</NavLinkStyled>
            </Nav.Item>
            <Nav.Item>
            <NavLinkStyled href="#">HEATED</NavLinkStyled>
            </Nav.Item>
            <Nav.Item>
            <NavLinkStyled href="#">DESIGN</NavLinkStyled>
            </Nav.Item>
            <Nav.Item>
            <NavLinkStyled href="#">MORE</NavLinkStyled>
            </Nav.Item>
    </NavStyled>
);

export default NavMain;