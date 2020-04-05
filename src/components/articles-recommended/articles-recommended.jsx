import React from 'react';

import { 
    StyledContainer, 
    Row, 
    Col1, 
    Col2,  
    Title 
} from './articles-recommended.styles';

import { 
    HeadingSmall, 
    Price 
} from '../constant.styles.jsx';

import ButtonCustom from '../buttons/button-custom/button-custom';

import ImageArticle from '../../assets/images/asset1-min.jpg';

const RecommendedArticle = () => (
    <StyledContainer>
        <Row>
            <Col1>
                <img src={ImageArticle} alt="article"/>
            </Col1>
            <Col2>
                <HeadingSmall>You at Work: Doing Your Best Work Remotely</HeadingSmall>
                <Title>PRESS TOOLKIT</Title>
                <Price>$24.95</Price>
                <ButtonCustom viewDetails >View Details</ButtonCustom>
            </Col2>
        </Row>
    </StyledContainer>
);

export default RecommendedArticle;