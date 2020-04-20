import React from 'react';
import PropTypes from 'prop-types';

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

HomepageBody.defaultProps = {
  articles: []
};

HomepageBody.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any))
};

export default HomepageBody;
