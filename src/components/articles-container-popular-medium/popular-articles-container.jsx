import React from 'react';

import { PopularArticleContainer, HR, Title } from './popular-article-container.styles';

import ArticlePopular from '../article-populars';
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
    <NavBottom />
  </PopularArticleContainer>

);

export default PopularArticle;
