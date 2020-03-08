import React from 'react';

import {
    ArticlesContainer,
    ImageContainer,
    TextsHolder,
    ArticleTitle,
    SecondaryTitle,
    AuthorInfo,
    AuthorName,
    AuthorLocation,
    PublishInfo,
    PublishDate,
    TimeOfReading
} from './articles.styles';

import Img from '../../assets/images/article.jpg';


const Article = () => (
    <ArticlesContainer>
        <ImageContainer>
            <img src={Img} alt="article"/>
        </ImageContainer>
        <TextsHolder>
            <ArticleTitle>
                12 Powerfull ways to change your life when you feel hopeless
            </ArticleTitle>
            <SecondaryTitle>
                An honest authentic guide to self improvement
            </SecondaryTitle>
            <AuthorInfo>
                <AuthorName>
                    Ayodejii Avossika  
                </AuthorName>
                <AuthorLocation>
                    in Mind Cafe
                </AuthorLocation>
            </AuthorInfo>
            <PublishInfo>
                <PublishDate>
                    Dec 22, 2019
                </PublishDate>
                <TimeOfReading>
                    9 min read
                </TimeOfReading>
            </PublishInfo>
        </TextsHolder>
    </ArticlesContainer>
);

export default Article;