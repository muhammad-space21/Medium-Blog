import React from 'react';

import { 
    DesignPageStyled, 
    Content, 
    BodyContainer, 
    AsideContainer 
} from './design-page.styles';

import NavbarMainPage from '../../components/navbar-main-page/navbar-main-page';

import FollowUs from '../../components/design-page-components/follow-us-component/follow-us-component';
import RelatedTopic from '../../components/design-page-components/related-topic-component/related-topic-component';
import PopularInDesign from '../../components/design-page-components/popular-in-design-component/popular-in-design-component';



const DesignPage = () => (
    <DesignPageStyled>
        <NavbarMainPage navbarShadow />
        <Content>
            <BodyContainer>
            
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