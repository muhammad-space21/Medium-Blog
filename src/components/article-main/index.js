/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { createMarkup } from '../../utils';

import {
  StyledContainer, TextWrapper, ButtonsWrapper, Col1, DescribeStyled
} from './style';

import ButtonString from '../buttons/button-string/button-string';
import ImageArticle from '../../assets/images/coronavirus-1.jpg';

const ArticleMain = ({ article, ...props }) => (
  <StyledContainer {...props}>
    <Col1>
      <h1>
        <Link to={article.route}>
          {article.title_uz}
        </Link>
      </h1>
      <TextWrapper>
        <h2>
          {article.categories.map((item, index) => (
            <Link key={item.id || index} to={item.route}>
              {item.label}
            </Link>
          ))}
        </h2>

        <h3>digital article</h3>
      </TextWrapper>
      <DescribeStyled dangerouslySetInnerHTML={createMarkup(article.description_uz)} />
      <ButtonsWrapper>
        <ButtonString homePageBtn saveShare save />
        <ButtonString homePageBtn saveShare />
      </ButtonsWrapper>
    </Col1>
    <img src={ImageArticle} alt="article" />
  </StyledContainer>
);

ArticleMain.propTypes = {
  article: PropTypes.objectOf(PropTypes.any)

};

ArticleMain.defaultProps = {
  article: {}
};

export default ArticleMain;
