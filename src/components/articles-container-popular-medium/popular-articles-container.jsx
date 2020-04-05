import React from 'react';

import { PopularArticleContainer, HR, Title } from './popular-article-container.styles';

import ArticlePopular from '../article-populars-medium';
import NavBottom from '../nav-bottom/nav-bottom';


const PopularArticle = () => (
  <PopularArticleContainer>
    <Title>Popular on Medium</Title>
    <HR />
    <ArticlePopular />
    <ArticlePopular />
    <ArticlePopular />
    <ArticlePopular />
    <HR />
  </PopularArticleContainer>

);

export default PopularArticle;
