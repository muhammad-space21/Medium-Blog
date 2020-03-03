import React from 'react';

import styled from 'styled-components';

import { Button } from 'react-bootstrap';


const StyledButton = styled(Button)`
    width: ${props=> props.primary ? '337px' : '150px' };
    height: ${props=> props.primary ? '61px' : '36px' };
    background: #029E74;
    font-size: 13px;
    font-weight: 500;
    text-align: center;
    border: none;
    opacity: 100%;

    &:hover {
        background-color: #029E74;
        cursor: pointer;
    }
`

const ButtonPrimary = () => (
    <div className="button-primary">
        <StyledButton variant='success'>
            Get started
        </StyledButton>
        
    </div>
);

export default ButtonPrimary;
