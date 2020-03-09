import React from 'react';

import {
    ArticlesContainer,
    ImageContainer,
    TextsHolder,
    TypeOfTopic,
    ArticleTitle,
    SecondaryTitle,
    AuthorInfo,
    AuthorName,
    AuthorLocation,
    PublishInfo,
    PublishDate,
    TimeOfReading,
    IconWrapper,
    ImgWrapper
} from './article-body.styles';

import Img from '../../assets/images/article.jpg';
import IconMenu from '../../assets/icons/menu.dots.png';
import IconSave from '../../assets/icons/save-icon.png';



const ArticleBody = () => (
    <ArticlesContainer>
        <TextsHolder>
            <TypeOfTopic>RELATIONSHIPS <span>PopularTopic</span></TypeOfTopic>
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
        <IconWrapper>
            <ImgWrapper><img src={IconSave} alt="icon-save"/></ImgWrapper> 
            <img src={IconMenu} alt="icon-menu"/>
        </IconWrapper>
        <ImageContainer>
            <img src={Img} alt="article"/>
        </ImageContainer>
    </ArticlesContainer>
);

export default ArticleBody;
