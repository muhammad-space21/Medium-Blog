import React from 'react';

import {
  StyledContainer, TextWrapper, ButtonsWrapper, Col1
} from './article-main.styles';

import ButtonString from '../buttons/button-string/button-string';


const ArticleMain = (props) => (
  <StyledContainer {...props}>
    <Col1>
      <h1>How to Avoid Shaking Hands</h1>
      <TextWrapper>
        <h2>managing yourself</h2>
        <h3>digital article</h3>
        <h4>by Amy</h4>
      </TextWrapper>
      <h5>You can still feel connected from afar.</h5>
      <ButtonsWrapper>
        <ButtonString homePageBtn saveShare save />
        <ButtonString homePageBtn saveShare />
      </ButtonsWrapper>
    </Col1>
  </StyledContainer>
);

export default ArticleMain;
