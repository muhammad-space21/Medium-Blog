import React from 'react';

import {
  MainPageStyled,
  Content,
  HR,
  ButtonContainer
} from './style';


import TopArticlesContainer from '../../components/ArticlesContainerTopMedium/index';
import ButtonPrimary from '../../components/ButtonPrimaryMedium/index';
import ArticleBodyContainer from '../../components/ArticlesBodyContainerMedium';
import PopularArticle from '../../components/ArticlesContainerPopularMedium/index';

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
