import React from 'react';

import { StyledContainer, Row } from './article-related.preview.styles';
import { TitlesOfSections } from '../constant.styles';

import ArticleRelated from '../articles-related/articles-related';

const ArticleRelatedPreview = () => (
    <StyledContainer>
        <TitlesOfSections>Related Articles</TitlesOfSections>
        <Row>
            <ArticleRelated />
            <ArticleRelated />
            <ArticleRelated />
        </Row>
    </StyledContainer>
);

export default ArticleRelatedPreview;