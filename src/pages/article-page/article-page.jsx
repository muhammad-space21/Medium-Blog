import React from 'react';

import { ArticlePageStyled } from './article-page.styles';

import NavbarMainPage from '../../components/navbar-main-page/navbar-main-page'; 
import ArticleMain from '../../components/article-page-components/article-main/article-main';
import ArticleMoreContainer from '../../components/article-page-components/more-from-medium-container/article-more-container';
import Footer from '../../components/article-page-components/footer/footer';


const ArticlePage = () => (
    <ArticlePageStyled>
            <NavbarMainPage />
            <ArticleMain/>
            <ArticleMoreContainer/>
            <Footer/>
    </ArticlePageStyled>
);

export default ArticlePage;