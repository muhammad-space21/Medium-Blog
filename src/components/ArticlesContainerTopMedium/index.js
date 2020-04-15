import React from 'react';

import {
  TopArticlesStyled,
  ArticleMainPreview,
  ArticleSecondPreview,
  ArticleThirdPreview
} from './styles';

import Article from '../ArticlesComponentMedium/index';
import ArticleRowTwo from '../ArticleRowTwoMedium/index';
import ArticleThird from '../ArticleThirdPreviewMedium/index';


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
