import React from 'react';

import { StyledContainer } from './homepage-body.styles';

import ArticleMain from '../article-main';

const HomepageBody = ({ articles }) => (
  <StyledContainer>
    {articles.map((article, index) => (
      <ArticleMain
        key={article.id || index}
        article={article}
        paddingLeft100
      />
    ))}

  </StyledContainer>
);

export default HomepageBody;
