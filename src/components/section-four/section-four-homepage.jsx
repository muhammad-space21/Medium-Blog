import React from 'react';

import { HeadingMain, SectionFourStyled } from './section-four-homepage.styles';

import ButtonPrimary from '../button-primary/button-primary';



const SectionFour = () => (
    <>
    <SectionFourStyled>
        <HeadingMain>
            Expand your reading.
            Expand your mind.
        </HeadingMain>
        < ButtonPrimary primaryBig />
    </SectionFourStyled>
    </>
);

export default SectionFour;