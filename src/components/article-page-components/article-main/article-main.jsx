import React from 'react';

import { 
    ArticleMainStyled, 
    Heading, 
    ImageWrapper, 
    ComponentHolder,
    TextWrapper,
    P,
    TitleMain,
    TitleSecondary
} from './article-main.styles';

import WriterInfo from '../writer-info/writer-info';
import IconHolder from '../icon-holder/icon-holder';

import ImageMain from '../../../assets/images/cartoon1.jfif';

const ArticleMain = () => (
    <ArticleMainStyled>
        <Heading>Fun Side Projects That You Can Build Today</Heading>
        <ComponentHolder>
            <WriterInfo/>
            <IconHolder/>
        </ComponentHolder>
        <ImageWrapper>
            <img src={ImageMain} alt="main-article"/>
        </ImageWrapper>
        <TextWrapper>
        <TitleMain>Title-Main</TitleMain>
            <P>
                Lorem ipsum dolor sit amet, 
                ad duis discere disputationi eum, 
                eum oratio epicurei deserunt ad, 
                vidit dicam conclusionemque ex qui. 
                Alienum accusam ad has. Mei ne eros 
                pertinacia sadipscing, ei est doctus 
                latine aperiam, te quo diam possit noluisse. 
                An soluta maiorum consetetur his, tale liber vim et.
            </P>
            <TitleSecondary>Title-Secondary</TitleSecondary>
            <P>
                Lorem ipsum dolor sit amet, 
                ad duis discere disputationi eum, 
                eum oratio epicurei deserunt ad, 
                vidit dicam conclusionemque ex qui. 
                Alienum accusam ad has. Mei ne eros 
                pertinacia sadipscing, ei est doctus 
                latine aperiam, te quo diam possit noluisse. 
                An soluta maiorum consetetur his, tale liber vim et.
            </P>
            <P>
                Lorem ipsum dolor sit amet, 
                ad duis discere disputationi eum, 
                eum oratio epicurei deserunt ad, 
                vidit dicam conclusionemque ex qui. 
                Alienum accusam ad has. Mei ne eros 
                pertinacia sadipscing, ei est doctus 
                latine aperiam, te quo diam possit noluisse. 
                An soluta maiorum consetetur his, tale liber vim et.
            </P><P>
                Lorem ipsum dolor sit amet, 
                ad duis discere disputationi eum, 
                eum oratio epicurei deserunt ad, 
                vidit dicam conclusionemque ex qui. 
                Alienum accusam ad has. Mei ne eros 
                pertinacia sadipscing, ei est doctus 
                latine aperiam, te quo diam possit noluisse. 
                An soluta maiorum consetetur his, tale liber vim et.
            </P><P>
                Lorem ipsum dolor sit amet, 
                ad duis discere disputationi eum, 
                eum oratio epicurei deserunt ad, 
                vidit dicam conclusionemque ex qui. 
                Alienum accusam ad has. Mei ne eros 
                pertinacia sadipscing, ei est doctus 
                latine aperiam, te quo diam possit noluisse. 
                An soluta maiorum consetetur his, tale liber vim et.
            </P>
        </TextWrapper>
    </ArticleMainStyled>
);

export default ArticleMain;