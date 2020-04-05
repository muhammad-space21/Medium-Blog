import React from 'react';

import { 
    HeadingBig, 
    Heading16, 
    ArticleType, 
    Heading17Grey  
} from '../../component/constant.styles';

import { StyledContainer, Row, RowHide } from './topic-page-header.styles';

import ButtonString from '../../component/buttons/button-string/button-string';
import ButtonArrow from '../../component/buttons/button-arrow/button-arrow';
import ArticleMain from '../../component/article-main/article-main';


const TopicPageHeader = ()  => (
    <StyledContainer>
        <HeadingBig>Leadership</HeadingBig>
        <ButtonString homePageBtn />
        <Heading17Grey>READ THESE FIRST:</Heading17Grey>
        <Row>
            <ArticleMain  imageHide secondaryTextHide hrHide />
            <ArticleMain  imageHide secondaryTextHide hrHide />
        </Row>
        <RowHide>
            <Heading16>Related Topics: </Heading16>
            <ArticleType lowercase >Leadership & Managing People |</ArticleType>
            <ArticleType lowercase > Managing People </ArticleType>  
        </RowHide>
        <ButtonArrow seeTopics />    
    </StyledContainer>
);

export default TopicPageHeader;