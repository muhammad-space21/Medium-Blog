import React from 'react';

import styled from 'styled-components';


const Button = styled.button`
    width: 150px;
    height: 36px;
    background: #029E74;
    /* color: white; */
    font-size: 16px;
    text-align: center;
    border: none;
`

const ButtonPrimary = () => (
    <div className="button-primary">
        <Button>
            <button>
                Get Started
            </button>
        </Button>
    </div>
);

export default ButtonPrimary;
