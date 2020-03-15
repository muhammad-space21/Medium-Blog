import React from 'react';

import { StyledContainer, Title, Row, HR } from './article-more-container.styles';

import MoreArticles from '../more-articles/more-articles';


const ArticleMoreContainer = () => (
    <StyledContainer>
        <Title>More From Medium</Title>
        <HR/>
        <Row>
            <MoreArticles/>
            <MoreArticles/>
            <MoreArticles/>
        </Row>
    </StyledContainer>

);

export default ArticleMoreContainer;