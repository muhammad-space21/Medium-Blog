import React from 'react';

import styled  from 'styled-components';
// import css from 'styled-components';

import { Container, Row, Col } from 'react-bootstrap';

import BrandImage from '../../assets/images/asset7.JPG';
import IphoneButton from '../../assets/images/iPhone.png';
import GooglePlay from '../../assets/images/GooglePlay.png';


// Style of Footer
const FooterMain = styled.div`
    width: 100%;
    height: 265px;
    background-color: #000000;
    img {
        width: 35px;
        height: 35px;
        margin-top: 50px;
        margin-left: -16px;
        margin-bottom: 10px;
    }
`
const H1 = styled.h1`
    font-size: 15px;
    color: #FFFFFF;
    margin-right: 33px;
    margin-left: -14px;
    margin-top: 10px;
    &:hover {
        cursor: pointer;
    }
`
const H2 = styled.h2`
    font-size: 15px;
    color: #999999;
    margin-right: 20px;
    margin-top: 10px;

`
const H6 = styled.h6`
    font-size: 13px;
    color: #999999;
    margin-left: -14px;
    margin-top: 15px;
`


const Row1 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:  flex-start;
`;
const Row2 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:  flex-start;
`;




const Footer = () => (
    <FooterMain>
    <div className='footer'>
        <Container>
            <Row>
                <Col>
                    <img src={BrandImage} alt="brand"/>
                    <Row1>
                        <H1>Get Started</H1>
                        <H1>Subscribe</H1>
                        <H2>Have an account?</H2>
                        <H1>Sign in</H1>
                    </Row1>
                    <Row2>
                        <H1>About Medium</H1>
                        <H1>Write</H1>
                        <H1>Gift</H1>
                        <H1>Help</H1>
                        <H1>Press Contacts</H1>
                        <H1>Careers</H1>
                        <H1>Legal</H1>
                    </Row2>
                    <H6>© 2019, A Medium Corporation</H6>
                </Col>
                <Col>
                    <H2>Get the Medium app</H2>
                    <img  src={IphoneButton} alt="iPhone"/>
                    <img  src={GooglePlay} alt="iPhone"/>
                </Col>
            </Row>
        </Container>
    </div>
</FooterMain>
);

export default Footer;