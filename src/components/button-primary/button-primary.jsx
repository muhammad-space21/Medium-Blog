import React from 'react';

import { StyledButton } from './button-primary.styles';


const ButtonPrimary = (props) => (
    <div className="button-primary">
        <StyledButton {...props}>
            Get started
        </StyledButton>
        
    </div>
);

export default ButtonPrimary;
