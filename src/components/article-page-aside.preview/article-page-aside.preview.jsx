import React from 'react';

import { 
    StyledContainer, 
    Col1, 
    ImageWrapper, 
    Col2, 
    TextWrapper 
} from './article-page-aside.preview.styles';

import RecommendedArticle from '../../component/articles-recommended/articles-recommended';

import ImageSide from '../../assets/images/corona-4.jpg';

import { HeadingSmall, TitlesOfSections } from '../../component/constant.styles';

const ArticlePageAside = () => (
    <StyledContainer>
        <Col1>
        <TitlesOfSections>What to read next</TitlesOfSections>
            <ImageWrapper>
                <img src={ImageSide} alt="aside" />
            </ImageWrapper>
            <TextWrapper>
                <HeadingSmall>
                    The Coronavirus Crisis Doesn’t Have to Lead to Layoffs
                </HeadingSmall>
            </TextWrapper>
        </Col1>
        <Col2>
            <TitlesOfSections>Recommended</TitlesOfSections>  
            <RecommendedArticle/>
            <RecommendedArticle/>
            <RecommendedArticle/>
        </Col2>
    </StyledContainer>
);

export default ArticlePageAside;