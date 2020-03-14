import React from 'react';

import { ArticlePageStyled } from './article-page.styles';

import NavbarMainPage from '../../components/navbar-main-page/navbar-main-page'; 
import Footer from '../../components/article-page-components/footer/footer';


const ArticlePage = () => (
    <ArticlePageStyled>
            <NavbarMainPage />
            <Footer/>
    </ArticlePageStyled>

);

export default ArticlePage;