import React from 'react';

import { StyledContainer } from './homepage-body.styles';

import ArticleMain from '../article-main/article-main';

const HomepageBody = () => (
    <StyledContainer>
        <ArticleMain paddingLeft100 />
        <ArticleMain paddingLeft100 />
        <ArticleMain paddingLeft100 />
        <ArticleMain paddingLeft100 />
        <ArticleMain paddingLeft100 />
        <ArticleMain paddingLeft100 /> 
    </StyledContainer>
);

export default HomepageBody;