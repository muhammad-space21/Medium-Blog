import React from 'react';

import {
  MainPageStyled,
  Content,
  HR,
  ButtonContainer
} from './style';


import TopArticlesContainer from '../../components/articles-container-top/top-articles-container';
import ButtonPrimary from '../../components/button-primary/button-primary';
import ArticleBodyContainer from '../../components/articles-body-container';
import PopularArticle from '../../components/articles-container-popular/popular-articles-container';

const HomePage = () => (
  <MainPageStyled>
    <TopArticlesContainer />
    <ButtonContainer>
      <ButtonPrimary btnLink>See Editor's picks   </ButtonPrimary>
    </ButtonContainer>
    <HR />
    <Content>
      <ArticleBodyContainer />
      <PopularArticle />
    </Content>
  </MainPageStyled>
);


export default HomePage;
