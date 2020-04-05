import React from 'react';

import {
  StyledContainer,
  Title,
  Wrapper
} from './style';

import IconNext from '../../assets/icons/next.svg';


class NavOfArticles extends React.Component {
  render() {
    return (
      <StyledContainer>
        <Wrapper>
          <Title
            active
          >
            <h1>Latest</h1>
          </Title>
          <Title>
            <h1>Popular</h1>
          </Title>
        </Wrapper>
      </StyledContainer>
    );
  }
}

export default NavOfArticles;
