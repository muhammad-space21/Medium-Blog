import React from 'react';

import styled from 'styled-components';

import NavbarMain from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';


const StyledHomePage = styled.div`
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
`;

const Homepage = () => (
    <StyledHomePage>
            <NavbarMain />
            <Header />
            <Footer />
    </StyledHomePage>
);

export default Homepage;