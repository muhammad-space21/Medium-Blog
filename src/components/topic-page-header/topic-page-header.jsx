import React from 'react';

import {
  HeadingBig,
  Heading16,
  ArticleType,
  Heading17Grey
} from '../constant.styles';

import { StyledContainer, Row } from './topic-page-header.styles';

import ButtonString from '../buttons/button-string/button-string';
import ArticleMain from '../article-main/article-main';


const TopicPageHeader = () => (
  <StyledContainer>
    <HeadingBig>Leadership</HeadingBig>
    <Heading17Grey>READ THESE FIRST:</Heading17Grey>
    <Row>
      <ArticleMain imageHide secondaryTextHide hrHide />
      <ArticleMain imageHide secondaryTextHide hrHide />
    </Row>

  </StyledContainer>
);

export default TopicPageHeader;
