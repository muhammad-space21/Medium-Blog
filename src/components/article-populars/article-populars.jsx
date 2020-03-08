import React from 'react';

import {
    ArticlesContainer,
    Counter,
    TextsHolder,
    ArticleTitle,
    AuthorInfo,
    AuthorName,
    AuthorLocation,
    PublishInfo,
    PublishDate,
    TimeOfReading
} from './article-populars.styles';



const ArticlePopular = () => (
    <ArticlesContainer>
        <Counter>
            <span>01</span>
        </Counter>
        <TextsHolder>
            <ArticleTitle>
                12 Powerfull ways to change your life when you feel hopeless
            </ArticleTitle>
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

export default ArticlePopular;