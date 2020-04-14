import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledContainer,
  Title,
  Wrapper
} from './style';

const NavOfArticles = ({ query, handleChangeFilter }) => (
  <StyledContainer>
    <Wrapper>
      <Title
        active={query && query.filter === 'createdAt'}
        onClick={() => handleChangeFilter({ ...query, filter: 'createdAt', sortDr: 'ASC' })}
      >
        <h1>Latest</h1>
      </Title>
      <Title
        active={query && query.filter === 'views'}
        onClick={() => handleChangeFilter({ ...query, filter: 'views', sortDr: 'DESC' })}
      >
        <h1>Popular</h1>
      </Title>
    </Wrapper>
  </StyledContainer>
);


NavOfArticles.propTypes = {
  handleChangeFilter: PropTypes.func,
  query: PropTypes.objectOf(PropTypes.any)
};

NavOfArticles.defaultProps = {
  handleChangeFilter: () => {},
  query: {}
};


export default NavOfArticles;
