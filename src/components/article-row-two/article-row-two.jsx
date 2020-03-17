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
    ImgWrapper,
    StarIcon,
} from './article-row-two.styles';

import Img from '../../assets/images/cartoon7.jpg';
import IconSave from '../../assets/icons/save-icon.svg';
import starIcon from '../../assets/icons/star.png';


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
        <ImgWrapper><img src={IconSave} alt="icon-save"/></ImgWrapper> 
    </ArticlesContainer>
);

export default ArticleRowTwo;