import React from 'react';

import { ArticleBodyStyled } from './article-body-container.styles';

import ArticleBody from '../article-body/article-body';


const ArticleBodyContainer = () => (
    <ArticleBodyStyled>
        <ArticleBody />
        <ArticleBody />
        <ArticleBody />
        <ArticleBody />
        <ArticleBody />
        <ArticleBody />
        <ArticleBody />
    </ArticleBodyStyled>
);

export default ArticleBodyContainer;
