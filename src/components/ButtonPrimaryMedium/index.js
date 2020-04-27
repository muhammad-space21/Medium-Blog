/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { StyledButton } from './styles';


const ButtonPrimary = (props) => (
  <StyledButton {...props} />
);

export default ButtonPrimary;
