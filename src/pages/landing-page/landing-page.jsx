import React from 'react';

import styled from 'styled-components';


import NavbarMain from '../../components/navbar/navbar';
import Header from '../../components/header/header';
import SectionOne from '../../components/homepage-sections/section-one/section-one-homepage';
import SectionTwo from '../../components/homepage-sections/section-two/section-two-homepage';
import SectionThree from '../../components/homepage-sections/section-three/section-three-homepage';
import SectionFour from '../../components/homepage-sections/section-four/section-four-homepage';
import Footer from '../../components/footer/footer';



const StyledHomePage = styled.div`
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
`;

const LandingPage = () => (
        <StyledHomePage>
            <NavbarMain />
            <Header />
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour/>
            <Footer />
        </StyledHomePage>
);

export default LandingPage;