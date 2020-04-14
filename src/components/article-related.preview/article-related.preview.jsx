import React from 'react';

import Spinner from '../spinner';
import ArticleRelated from '../articles-related/articles-related';

import { StyledContainer, Row } from './article-related.preview.styles';
import { TitlesOfSections } from '../constant.styles';

const ArticleRelatedPreview = ({ articles, loading }) => (
  <StyledContainer>
    <TitlesOfSections>Related Articles</TitlesOfSections>
    {loading && <Spinner />}
    {articles && articles.length && (
      <Row>
        {articles.map((article, index) => (
          <ArticleRelated
            key={article.id || index}
            article={article}
          />
        ))}
      </Row>
    )}
  </StyledContainer>
);

export default ArticleRelatedPreview;
