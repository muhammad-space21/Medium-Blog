import React from 'react';

import Hashtags from '../hashtags/hashtags';
import { Container } from 'react-bootstrap';

import { HeaderStyled, HeadingMain } from './header.styles';



const Header = () => (
    <HeaderStyled>
        <Container>
            <HeadingMain> Get smarter about what matters to you. </HeadingMain> 
            <Hashtags />
        </Container>
    </HeaderStyled>
);

export default Header;