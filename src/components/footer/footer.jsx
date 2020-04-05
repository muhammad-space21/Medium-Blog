import React from 'react';

import ButtonCustom from '../buttons/button-custom/button-custom';
import NavBottom from '../nav-bottom/nav-bottom';

import { 
    StyledContainer, 
    BrandContainer, 
    Row1, 
    ColTop1, 
    ColTop2, 
    Row2,
    ColBottom1,
    ColBottom2,
    HR, 
    HrVertical, 
    Section,
    Body,
    Title,
    H1,
    H2,
    Wrapper
} from './footer.styles';

import IconBrand from '../../assets/icons/bank.svg';
import IconFacebook from '../../assets/icons/facebook.svg';
import IconTwitter from '../../assets/icons/twitter.svg';
import IconInstagram from '../../assets/icons/instagram.svg';
import IconLinkedin from '../../assets/icons/linkedin.svg';
import IconWiFi from '../../assets/icons/wifi.svg';
import IconArrow from '../../assets/icons/next.svg';

const Footer = () => (
    <StyledContainer>
        <HR/>
        <Row1>
            <ColTop1>
                <BrandContainer>
                    <img src={IconBrand} alt="icon-brand"/>
                    <span>Harvard <br/> Business <br/> Review </span>
                </BrandContainer>
            </ColTop1>
            <ColTop2>
                <ButtonCustom>Start my subscription!</ButtonCustom>
            </ColTop2>
        </Row1>
        <Row2>
            <ColBottom1>
                <Section>
                    <HrVertical />
                    <Body>
                        <Title> 
                            Explore  HBR 
                            <img src={IconArrow} alt='icon-arrow' /> 
                        </Title>
                        <H1>The Latest</H1>
                        <H1>Most Popular</H1>
                        <H1>All Topics</H1>
                        <H1>Magazine Archive</H1>
                        <H1>The Big Idea</H1>
                        <H1>Reading Lists</H1>
                        <H1>Case Selections</H1>
                        <H1>Video</H1>
                        <H1>Podcasts</H1>
                        <H1>Webinars</H1>
                        <H1>Visual Library</H1>
                        <H1>My Library</H1>
                        <H1>Newsletters</H1>
                        <H1>HBR Ascend</H1>
                    </Body>
                </Section>
                <Section>
                    <HrVertical />
                    <Body>
                        <Title> 
                            HBR Store
                            <img src={IconArrow} alt='icon-arrow' />  
                        </Title>
                        <H1>Article Reprint</H1>
                        <H1>Books</H1>
                        <H1>Cases</H1>
                        <H1>Collections</H1>
                        <H1>Magazine Issues</H1>
                        <H1>HBR Guide Series</H1>
                        <H1>HBR 20-Minute Managers</H1>
                        <H1>HBR Emotional Intelligence Series</H1>
                        <H1>HBR Must Reads</H1>
                        <H1>Tools</H1>
                    </Body>
                </Section>
                <Section>
                    <HrVertical />
                    <Body>
                        <Title> 
                            About HBR
                            <img src={IconArrow} alt='icon-arrow' />  
                        </Title>
                        <H1>Contact Us</H1>
                        <H1>Advertise With Us</H1>
                        <H1>Information for <br/> Booksellers/Retailers</H1>
                        <H1>Masthead</H1>
                        <H1>Global Editions</H1>
                        <H1>Media Inquiries</H1>
                        <H1>Guidelines for Authors</H1>
                        <H1>HBR Analytic Services</H1>
                    </Body>
                </Section>
            </ColBottom1>
            <ColBottom2>
                <Section>
                    <HrVertical />
                    <Body>
                        <Title> 
                            HBR Subscriber Assistance 
                            <img src={IconArrow} alt='icon-arrow' /> 
                        </Title>
                        <H1>Subscribe</H1>
                        <H1>Subscriber Help</H1>
                        <H1>
                            U.S./Canada: <br/> 
                            800.274.3214
                            harvard@cdsfulfillment.com
                            hbr.org/subscriberservices.com
                        </H1>
                        <H1>
                            International: <br/>
                            +44.1858.438.412
                            (Asia Pacific: +612.8296.5401)
                            hbr@subscription.co.uk
                            subscription.co.uk/hbr/help
                        </H1>
                    </Body>
                </Section>
                <Section>
                    <HrVertical />
                    <Body>
                        <Title> 
                            HBR.ORG Customer Assistance 
                            <img src={IconArrow} alt='icon-arrow' /> 
                        </Title>
                        <H1>Help Center</H1>
                        <H1>
                            U.S./Canada: <br/>
                            800.988.0886
                        </H1>
                        <H1>
                            International: <br/>
                            617.783.7500
                        </H1>
                        <H1>
                            Email: <br/>
                            customerservice@harvard.com
                        </H1>
                        <H1>Copyright Permissions</H1>
                    </Body>
                </Section>
                <Section>
                    <HrVertical />
                    <Body>
                        <Title>
                            Follow HBR
                        </Title>
                        <Wrapper>
                            <H2> 
                                <img src={IconFacebook} alt='icon-facebook' /> 
                                Facebook
                            </H2>
                            <H2>
                                <img src={IconTwitter} alt='icon-twitter' /> 
                                Twitter
                            </H2>
                            <H2>
                                <img src={IconLinkedin} alt='icon-linkedin' />  
                                LinkedIn
                            </H2>
                            <H2>
                                <img src={IconInstagram} alt='icon-instagram' /> 
                                Instagram
                            </H2>
                            <H2>
                                <img src={IconWiFi} alt='icon-wifi' /> 
                                Your Newsreader
                            </H2>
                        </Wrapper>
                    </Body>
                </Section>
            </ColBottom2>
        </Row2>
        <NavBottom/>
    </StyledContainer>
);

export default Footer;