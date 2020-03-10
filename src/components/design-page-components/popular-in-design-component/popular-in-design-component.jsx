import React from 'react';

import { PopularInDesignStyled, Title, HR }  from  './popular-in-design-component.styles';

import ArticlePopular from '../article-popular-component/article-popular-component';

const PopularInDesign = () => (
    <PopularInDesignStyled>
        <Title>Popular in Design</Title>
        <HR/>
        <ArticlePopular/>
        <ArticlePopular/>
        <ArticlePopular/>
        <ArticlePopular/>
        <ArticlePopular/>
    </PopularInDesignStyled>


);

export default PopularInDesign;