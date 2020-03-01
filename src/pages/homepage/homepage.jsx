import React from 'react';

import styled from 'styled-components';

import NavbarMain from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';


const StyledHomePage = styled.div`
    font-family: 'Noto Sans KR';

`
const Homepage = () => (
    <StyledHomePage>
            <NavbarMain />
            <Header />
            <Footer />
    </StyledHomePage>
);

export default Homepage;