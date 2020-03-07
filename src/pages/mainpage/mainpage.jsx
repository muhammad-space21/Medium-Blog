import React from 'react';

import { MainPageStyled, Content } from './mainpage.styles';

import NavbarMainPage from '../../components/navbar-main-page/navbar-main-page';
import NavMain from '../../components/nav/nav';
import TopArticlesContainer from '../../components/articles-container-top/top-articles-container';
import ArticleBodyContainer from '../../components/articles-body-container/article-body-container';
import PopularArticle from '../../components/articles-container-popular/popular-articles-container';

const MainPage = () => (
    <MainPageStyled>
        <NavbarMainPage />
        <NavMain />
        <TopArticlesContainer/>
        <Content>
            <ArticleBodyContainer/>
            <PopularArticle/>
        </Content>
    </MainPageStyled>
);


export default MainPage;