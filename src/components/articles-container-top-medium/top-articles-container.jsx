import React from 'react';
import PropTypes from 'prop-types';

import {
  TopArticlesStyled,
  ArticleMainPreview,
  ArticleSecondPreview,
  ArticleThirdPreview
} from './top-articles-container.styles';

import Article from '../articles-component-medium/articles';
import ArticleRowTwo from '../article-row-two-medium';
import ArticleThird from '../article-third-preview-medium';


const TopArticlesContainer = ({ main }) => (
  <TopArticlesStyled>
    {main.map((i, idx) => (
      <React.Fragment key={i.id || idx}>
        <ArticleMainPreview>
          <Article article={i.articles.slice(0, 1)[0]} />
        </ArticleMainPreview>

        <ArticleSecondPreview>
          {i.articles.slice(1, 4).map((article) => <ArticleRowTwo key={article.id} article={article} />)}
        </ArticleSecondPreview>

        <ArticleThirdPreview>
          <ArticleThird article={i.articles.slice(4, 5)[0]} />
        </ArticleThirdPreview>
      </React.Fragment>
    ))}
  </TopArticlesStyled>
);

TopArticlesContainer.defaultProps = {
  main: []
};

TopArticlesContainer.propTypes = {
  main: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any))
};

export default TopArticlesContainer;
