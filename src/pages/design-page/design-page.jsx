import React from 'react';

import { 
    DesignPageStyled, 
    Content, 
    BodyContainer, 
    AsideContainer 
} from './design-page.styles';

import NavbarMainPage from '../../components/navbar-main-page/navbar-main-page';


const DesignPage = () => (
    <DesignPageStyled>
        <NavbarMainPage navbarShadow />
        <Content>
            <BodyContainer>
                
            </BodyContainer>
            <AsideContainer>

            </AsideContainer>
        </Content>
    </DesignPageStyled>
);

export default DesignPage;