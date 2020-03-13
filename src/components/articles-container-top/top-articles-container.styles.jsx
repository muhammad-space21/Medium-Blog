import styled from 'styled-components';


export const TopArticlesStyled = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    @media screen and ( max-width: 950px ) {
        margin-left: 20px;
        padding-right: 20px;
    } 
`;

export const ArticleMainPreview = styled.div`
    width: 35%;
    height: fit-content;
    @media screen and ( max-width: 1015px ) {
        width: 55%;
    }
    @media screen and ( max-width: 910px ) {
        width: 47%;
    }
    @media screen and ( max-width: 800px ) {
        width: 45%;
    }
    @media screen and ( max-width: 705px ) {
        width: 100%;
        order: 1;
        padding: 0px;
    }
`;

export const ArticleSecondPreview = styled.div`
    width: 30%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    @media screen and ( max-width: 1015px ) {
        width: 40%;
    }
    @media screen and ( max-width: 910px ) {
        width: 47%;
    }
    @media screen and ( max-width: 800px ) {
        width: 50%;
    }
    @media screen and ( max-width: 705px ) {
        width: 100%;
        order: 2;
        margin-top: 80px;
    }
`;

export const ArticleThirdPreview = styled.div`
    width: 27%;
    height: fit-content;
    display: flex;
    flex-direction: column;

    @media screen and ( max-width: 1015px ) {
        display: none;
    }
`;