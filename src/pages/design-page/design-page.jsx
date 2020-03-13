import React from 'react';

import { 
    DesignPageStyled, 
    Content, 
    BodyContainer, 
    AsideContainer ,
    HeaderContainer,
    Heading,
    HR
} from './design-page.styles';

import NavbarMainPage from '../../components/navbar-main-page/navbar-main-page';

import FollowUs from '../../components/design-page-components/follow-us-component/follow-us-component';
import RelatedTopic from '../../components/design-page-components/related-topic-component/related-topic-component';
import PopularInDesign from '../../components/design-page-components/popular-in-design-component/popular-in-design-component';
import ArticleMain from '../../components/design-page-components/article-main-component/article-main-component';
import ArticleBodyDesign from '../../components/design-page-components/article-body-component/article-body-component';
import FeaturedWriter from '../../components/design-page-components/featured-writer-component/featured-writer';


const DesignPage = () => (
    <DesignPageStyled>
        <NavbarMainPage navbarShadow />
        <Content>
            <BodyContainer>
                <HeaderContainer>
                    <ArticleMain/>
                </HeaderContainer>
                <Heading>
                    latest
                </Heading>
                <HR/>
                <ArticleBodyDesign/>
                <ArticleBodyDesign/>
                <ArticleBodyDesign/>
                <ArticleBodyDesign/>
                <ArticleBodyDesign/>
                <FeaturedWriter/>
            </BodyContainer>
            <AsideContainer>
                <FollowUs/>
                <RelatedTopic/>
                <PopularInDesign/>
            </AsideContainer>
        </Content>
    </DesignPageStyled>
);

export default DesignPage;