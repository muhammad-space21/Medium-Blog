import React from 'react';

import { ArticlePageStyled, Content, AsideRight, AsideLeft } from './article-page.styles';

import NavbarMainPage from '../../components/navbar-main-page/navbar-main-page'; 
import ArticleMain from '../../components/article-page-components/article-main/article-main';
import ArticleMoreContainer from '../../components/article-page-components/more-from-medium-container/article-more-container';
import Footer from '../../components/article-page-components/footer/footer';
import ClapsAside from '../../components/article-page-components/claps-container-aside/claps-container-aside.jsx';


const ArticlePage = () => (
    <ArticlePageStyled>
            <NavbarMainPage />
            <Content>
                <AsideLeft> 
                    <ClapsAside/> 
                </AsideLeft>
                <ArticleMain/>
                <AsideRight/>
            </Content>
            <ArticleMoreContainer/>
            <Footer/>
    </ArticlePageStyled>
);

export default ArticlePage;