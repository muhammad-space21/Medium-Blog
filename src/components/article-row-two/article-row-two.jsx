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
    TimeOfReading,
    ImgWrapper
} from './article-row-two.styles';

import Img from '../../assets/images/article.jpg';
import IconSave from '../../assets/icons/save-icon.png';

const ArticleRowTwo = () => (
    <ArticlesContainer>
        <ImageContainer>
            <img src={Img} alt="article"/>
        </ImageContainer>
        <TextsHolder>
            <ArticleTitle>
                12 Powerful ways to change your life when you feel hopeless
            </ArticleTitle>
            <SecondaryTitle>
                An honest authentic guide.
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
        <ImgWrapper><img src={IconSave} alt="icon-save"/></ImgWrapper> 
    </ArticlesContainer>
);

export default ArticleRowTwo;