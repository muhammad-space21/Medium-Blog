import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledContainer, HeadingBig, TextStyled
} from './style';

const TopicPageHeader = ({ page }) => (
  <StyledContainer>
    <HeadingBig>{page.label}</HeadingBig>
    <TextStyled>Id sunt occaecat elit in ipsum.Amet velit eiusmod culpa ex non cupidatat mollit voluptate consectetur.</TextStyled>
  </StyledContainer>
);

TopicPageHeader.propTypes = {
  page: PropTypes.objectOf(PropTypes.any)
};

TopicPageHeader.defaultProps = {
  page: {}
};

export default TopicPageHeader;
