import React from 'react';

import ButtonPrimary  from '../../button-primary/button-primary';

import { FeaturedWriterStyled, Heading, Row, Col1, Col2, ImageWrapper, Wrapper, Title, P, TextHolder } from './featured-writer.styles';

import ImageEye from '../../../assets/images/eye.JPG';

import FeaturedWriterArticle from '../featured-writer-article/featured-writer-article';

const FeaturedWriter = () => (
    <FeaturedWriterStyled>
        <Heading>
            FEATURED WRITER
        </Heading>
        <Row>
            <Col1>
                <Wrapper>
                    <ImageWrapper>
                        <img src={ImageEye} alt="eye"/>
                    </ImageWrapper>
                    <ButtonPrimary btnFollowGrey>Follow</ButtonPrimary>
                </Wrapper>
                <TextHolder>
                    <Title>
                        AIGA Eye on Design
                    </Title>
                    <P>The best new work by the world's most exciting designers - and the issues they care about, from @AIGAdesign's Eye on Design</P>
                </TextHolder>
            </Col1>
            <Col2>
                <FeaturedWriterArticle/>
                <FeaturedWriterArticle/>
                <FeaturedWriterArticle/>
            </Col2>
        </Row>
    </FeaturedWriterStyled>

);

export default FeaturedWriter;