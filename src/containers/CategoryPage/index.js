import React from 'react';

import {
  DesignPageStyled,
  Content,
  BodyContainer,
  AsideContainer,
  HeaderContainer,
  Heading,
  HR
} from './style';

// import NavbarMainPage from '../../components/NavbarMainPage';

import FollowUs from '../../components/design-page-components-medium/follow-us-component/follow-us-component';

import PopularInDesign from '../../components/design-page-components-medium/popular-in-design-container/popular-in-design-container';
import ArticleMain from '../../components/design-page-components-medium/article-main-component/article-main-component';
import ArticleBodyDesign from '../../components/design-page-components-medium/article-body-component/article-body-component';
import FeaturedWriter from '../../components/design-page-components-medium/featured-writer-container/featured-writer';
import FollowUsHorizontal from '../../components/design-page-components-medium/follow-us-horizontal/follow-us-horizontal';


const DesignPage = () => (
  <DesignPageStyled>
    {/* <NavbarMainPage navbarShadow /> */}
    <Content>
      <FollowUsHorizontal />
      <BodyContainer>
        <HeaderContainer>
          <ArticleMain />
        </HeaderContainer>
        <Heading>
          latest
        </Heading>
        <HR />
        <ArticleBodyDesign />
        <ArticleBodyDesign />
        <ArticleBodyDesign />
        <ArticleBodyDesign />
        <ArticleBodyDesign />
        <FeaturedWriter />
        <ArticleBodyDesign />
        <ArticleBodyDesign />
        <ArticleBodyDesign />
        <ArticleBodyDesign />
        <ArticleBodyDesign />
      </BodyContainer>
      <AsideContainer>
        <FollowUs />
        <PopularInDesign />
      </AsideContainer>
    </Content>
  </DesignPageStyled>
);

export default DesignPage;
