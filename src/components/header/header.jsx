import React from 'react';

import styled from  'styled-components';

import Hashtags from '../hashtags/hashtags';
import { Container } from 'react-bootstrap';




const HeaderStyled = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    padding-top: 50px;
`;

const HeadingMain = styled.h1`
    font-size: 85px;
    font-weight: medium;
    color: black;
    text-align: center;
    padding: 100px;
    font-family: 'Caladea';
    font-weight: 700;
    line-height: 85px;
    color: #292929;
`;

const Header = () => (
    <HeaderStyled>
        <Container>
            <HeadingMain> Get smarter about what matters to you. </HeadingMain> 
            <Hashtags />
        </Container>
    </HeaderStyled>
);

export default Header;