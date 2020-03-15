import React from 'react';

import { ArticlePageStyled } from './article-page.styles';

import NavbarMainPage from '../../components/navbar-main-page/navbar-main-page'; 
import IconHolder from '../../components/article-page-components/icon-holder/icon-holder';
import ArticleMoreContainer from '../../components/article-page-components/more-from-medium-container/article-more-container';
import Footer from '../../components/article-page-components/footer/footer';


const ArticlePage = () => (
    <ArticlePageStyled>
            <NavbarMainPage />
            <IconHolder/>
            <ArticleMoreContainer/>
            <Footer/>
    </ArticlePageStyled>
);

export default ArticlePage;