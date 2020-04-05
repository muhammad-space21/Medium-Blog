import React from 'react';

import Hashtags from '../hashtags/hashtags';

import { HeaderStyled, HeadingMain } from './header.styles';



const Header = () => (
    <HeaderStyled>
        <HeadingMain> Get smarter about what matters to you. </HeadingMain> 
        <Hashtags />
    </HeaderStyled>
);

export default Header;