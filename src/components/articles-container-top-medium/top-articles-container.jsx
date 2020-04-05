import React from 'react';

import {
  TopArticlesStyled,
  ArticleMainPreview,
  ArticleSecondPreview,
  ArticleThirdPreview
} from './top-articles-container.styles';

import Article from '../articles-component-medium/articles';
import ArticleRowTwo from '../article-row-two-medium';
import ArticleThird from '../article-third-preview-medium';


const TopArticlesContainer = () => (
  <TopArticlesStyled>
    <ArticleMainPreview>
      <Article />
    </ArticleMainPreview>

    <ArticleSecondPreview>
      <ArticleRowTwo />
      <ArticleRowTwo />
      <ArticleRowTwo />
    </ArticleSecondPreview>

    <ArticleThirdPreview>
      <ArticleThird />
    </ArticleThirdPreview>

  </TopArticlesStyled>
);

export default TopArticlesContainer;
