import React from 'react';

import {
  StyledContainer, Row, Heading
} from './popular-topics-section.styles';

import PopularTopicsCards from '../popular-topics-cards/popular-topics-cards';


const PopularTopicsSection = () => (
  <StyledContainer>
    <Heading>
      Popular
      <span>Topics</span>
    </Heading>
    <Row>
      <PopularTopicsCards />
    </Row>
  </StyledContainer>
);

export default PopularTopicsSection;
