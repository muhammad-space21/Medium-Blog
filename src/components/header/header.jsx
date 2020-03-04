import React from 'react';

import styled from  'styled-components';

import Hashtags from '../hashtags/hashtags';
import ButtonPrimaryBig from '../button-primary-big/button-primary-big';
import { Container, Row, Col } from 'react-bootstrap';




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
    font-size: 80px;
    font-weight: 700;
    color: black;
    text-align: center;
    padding: 100px;
    padding-bottom: 50px;
    font-family: 'Caladea';
    font-weight: 500;
    line-height: 85px;
    color: #292929;
`;
const H2Bold = styled.h2`
    font-size: 17px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 40px;
`;
const H2Bold2 = styled.h2`
    font-size: 17px;
    font-weight: 600;
    text-align: start;
    margin-left: 30px;
    margin-bottom: -1px;
`;
const H2Bold3 = styled.h2`
    font-size: 17px;
    font-weight: 600;
    text-align: start;
    margin-top: 50px;
    margin-bottom: 50px;
`;
const H1 = styled.h1`
    font-size: 14px;
    margin-top: 25px;
    margin-bottom: 107px;
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
const H2 = styled.div`
    font-size: 17px;
    color: #757575;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    margin-top: 20px;

`;
const H2Second = styled.div`
    font-size: 17px;
    color: #757575;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 10px;
    span {
        font-size: 17px;
        color: #757575;
        font-weight: 700;
        margin-left: 5px; 
    }

`;

const Sqr = styled.div`
    background-color: #03A87C;
    width: 25px;
    height: 25px;
    border-radius: 50px;
    margin-left: 10px;
    margin-right: 10px;
`;
const HeadingMain2 = styled.h1`
    font-size: 85px;
    font-weight: medium;
    color: black;
    text-align: left;
    padding-top: 100px;
    font-family: 'Caladea';
    font-weight: 500;
    line-height: 70px;
    color: #292929;
    `;
    const ButtonHolder = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 285px;
    `;
    const P = styled.p`
        font-size: 20px;
        color: rgba(0, 0, 0, 0.54);
        line-height: 32px;
        font-weight: 300;
        text-align: start;
        span {
            background-color: #CEFCE9;
        }
    `;
    const HR = styled.hr`
        border-bottom: 0.5px solid #CCCCCC;
        margin-top: 70px; 
        width: 40%;
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
                <H2Bold2>All on Medium, all for you.</H2Bold2>
            </HeadingWrapper>
            <HeadingMain2>No ads. No problems.</HeadingMain2>
            <H2>Your privacy stays yours. We don’t sell your data or target you with ads. Ever.</H2>
            <Row>
                <Col>
                    <ButtonHolder><ButtonPrimaryBig /></ButtonHolder>
                </Col>
                <Col>
                    <H2Bold3>We do things differently.</H2Bold3>
                    <P> Medium is not like any other platform on the internet. <span>Our sole purpose is to help you find compelling ideas, knowledge, and perspectives.</span> We don’t serve ads—we serve you, the curious reader who loves to learn new things. Medium is home to thousands of independent voices, and we combine humans and technology to find the best reading for you—and filter out the rest.</P>
                </Col>
            </Row>
            <HR/>
            <H2Bold>One Subscription. Unlimited Ideas.</H2Bold>
            <H2Second>
                Read unlimited stories with an optional subscription of <span> $5/month.</span>
            </H2Second>
            <H2Second>
                If it's not for you, cancel anytime.
            </H2Second>
            <HR/>
            <HeadingMain>
                Expand your reading.
                Expand your mind.
            </HeadingMain>
            <ButtonPrimaryBig />
        </Container>
    </HeaderStyled>
);

export default Header;