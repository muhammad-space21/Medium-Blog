import React from 'react';

import {
    StyledContainer,
    Row,
    Heading,
    ButtonWrapper
} from './styles';

import NewsletterCards from '';
import ButtonArrow from '';


const NewsletterSection = () => (
    <StyledContainer>
        <Heading>Subscribe to HBR Newsletters: <span>Keep Informed</span></Heading>
        <Row>
            <NewsletterCards />
        </Row>
        <ButtonWrapper>
            <ButtonArrow />
        </ButtonWrapper>
    </StyledContainer>

);

export default NewsletterSection;