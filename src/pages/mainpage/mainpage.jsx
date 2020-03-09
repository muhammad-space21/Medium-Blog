import React from 'react';

import { MainPageStyled, Content, HR, ButtonContainer } from './mainpage.styles';

import NavbarMainPage from '../../components/navbar-main-page/navbar-main-page';
import NavMain from '../../components/nav/nav';
import TopArticlesContainer from '../../components/articles-container-top/top-articles-container';
import ButtonPrimary from '../../components/button-primary/button-primary';
import ArticleBodyContainer from '../../components/articles-body-container/article-body-container';
import PopularArticle from '../../components/articles-container-popular/popular-articles-container';

const MainPage = (props) => (
    <MainPageStyled>
        <NavbarMainPage />
        <NavMain />
        <TopArticlesContainer/>
        <ButtonContainer>
            <ButtonPrimary btnLink>See Editor's picks  > </ButtonPrimary>
        </ButtonContainer>
        <HR/>
        <Content>
            <ArticleBodyContainer/>
            <PopularArticle/>
        </Content>
    </MainPageStyled>
);


export default MainPage;