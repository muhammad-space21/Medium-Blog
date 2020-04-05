import React from 'react';

import { HeadingMain, SectionFourStyled } from './section-four-homepage.styles';

import ButtonPrimary from '../../button-primary/button-primary';



const SectionFour = () => (
    <>
    <SectionFourStyled>
        <HeadingMain>
            Expand your reading.<br/>
            Expand your mind.
            </HeadingMain>
        < ButtonPrimary primaryBig>Get started</ButtonPrimary>
    </SectionFourStyled>
    </>
);

export default SectionFour;