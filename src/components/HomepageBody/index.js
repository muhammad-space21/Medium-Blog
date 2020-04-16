import React from 'react';

import { StyledContainer } from './styles';

import ArticleMain from '../articleMain';

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
