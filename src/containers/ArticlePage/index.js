import React from 'react';

import {
  ArticlePageStyled, Content, AsideRight, AsideLeft
} from './style';

import NavbarMainPage from '../../components/NavbarMainPage';
import ArticleMain from '../../components/article-page-components/article-main/article-main';
import ArticleMoreContainer from '../../components/article-page-components/more-from-medium-container/article-more-container';
import Footer from '../../components/article-page-components/footer/footer';
import ClapsAside from '../../components/article-page-components/claps-container-aside/claps-container-aside.jsx';


const ArticlePage = () => (
  <ArticlePageStyled>
    <NavbarMainPage />
    <Content>
      <AsideLeft>
        <ClapsAside />
      </AsideLeft>
      <ArticleMain />
      <AsideRight />
    </Content>
    <ArticleMoreContainer />
    <Footer />
  </ArticlePageStyled>
);

export default ArticlePage;
