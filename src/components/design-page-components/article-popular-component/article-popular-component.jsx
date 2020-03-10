import React from 'react';

import { 
    ArticlePopularStyled, 
    TextWrapper, 
    Heading, 
    TimeOfReading, 
    ImageWrapper 
} from './article-popular-component.styles';

import Image from '../../../assets/images/article.jpg';

const ArticlePopular = () => (
    <ArticlePopularStyled>
        <TextWrapper>
            <Heading>
                The ultimate guide to proper use of animation in UX
            </Heading>
            <TimeOfReading>
                17min
            </TimeOfReading>
        </TextWrapper>
        <ImageWrapper>
            <img src={Image} alt="article"/>
        </ImageWrapper>
    </ArticlePopularStyled>
);

export default ArticlePopular;