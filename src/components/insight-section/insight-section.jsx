import React from 'react';

import { StyledContainer, Title, Heading, H1, Row } from './insight-section.styles';

import ArticleMain from '../article-main/article-main';

const InsightSection = () => (
    <StyledContainer>
        <Title>Insight Center</Title>
        <Heading>The Era of Job Crafting</Heading>
        <H1>Design the work you want.</H1>
        <Row>
            <ArticleMain big secondaryTextHide hrHide  imageHide />
            <ArticleMain big secondaryTextHide hrHide imageHide />
        </Row>
    </StyledContainer>
);

export default InsightSection;