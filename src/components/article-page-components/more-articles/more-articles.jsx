import React from 'react';


import { MoreArticlesStyled, Heading, Title, ImageWrapper, Col } from './more-articles.styles';

import Image from '../../../assets/images/cartoon-2.jpg';


const MoreArticles = () => (
    <MoreArticlesStyled>
        <Title>More from 3min read</Title>
        <Col>
            <ImageWrapper>
                <img src={Image} alt="article"/>
            </ImageWrapper>
            <Heading>How to write a Headline</Heading>
        </Col>
    </MoreArticlesStyled>
);

export default MoreArticles;