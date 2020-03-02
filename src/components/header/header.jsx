import React from 'react';

import styled from  'styled-components';

import Hashtags from '../hashtags/hashtags';
import ButtonPrimaryBig from '../button-primary-big/button-primary-big';
import { Container } from 'react-bootstrap';




const HeaderStyled = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    padding-top: 50px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const HeadingMain = styled.h1`
    font-size: 85px;
    font-weight: medium;
    color: black;
    text-align: center;
    padding: 100px;
    padding-bottom: 50px;
    font-family: 'Caladea';
    font-weight: 700;
    line-height: 85px;
    color: #292929;
`;
const H2Bold = styled.h2`
    font-size: 17px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 40px;
`;
const H1 = styled.h1`
    font-size: 14px;
    margin-top: 25px;
    margin-bottom: 150px;
    span {
        color: #018F69;
    }
`;
const HeadingWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
const H2 = styled.h2`
    font-size: 17px;
    color: #757575;
`;
const Sqr = styled.div`
    background-color: #03A87C;
    width: 25px;
    height: 25px;
    border-radius: 50px;
    margin-left: 5px;
    margin-right: 6px;
`;

const Header = () => (
    <HeaderStyled>
        <Container>
            <HeadingMain> Get smarter about what matters to you. </HeadingMain> 
            <Hashtags />
            <H2Bold>
                Select what you're into. We'll help you find great things to read.
            </H2Bold>
            <ButtonPrimaryBig />
            <H1>Already have an account? <span>Sign in.</span> </H1>
            <HeadingWrapper>
            <H2><Sqr></Sqr>World-class publications.</H2>
                <H2><Sqr></Sqr>Undiscovered voices.</H2>
                <H2><Sqr></Sqr>Topics you love.</H2>
            </HeadingWrapper>
        </Container>
    </HeaderStyled>
);

export default Header;