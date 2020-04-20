import React from 'react';

import { OverlayTrigger, Tooltip } from 'react-bootstrap';

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
    StarIcon
} from './styles';

import Img from '../../assets/images/cartoon7.jpg';
import starIcon from '../../assets/icons/star.png';


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
            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Updated Jan 15</Tooltip>}>
                <span className="d-inline-block">
                    <PublishDate style={{ hoverEvents: 'none' }}>
                        Dec 22, 2019
                    </PublishDate>
                </span>
            </OverlayTrigger>
                <TimeOfReading>
                    9 min read
                </TimeOfReading>
                <StarIcon>
                    <img src={starIcon} alt="star-icon"/>
                </StarIcon>
            </PublishInfo>
        </TextsHolder>
    </ArticlesContainer>
);

export default Article;
