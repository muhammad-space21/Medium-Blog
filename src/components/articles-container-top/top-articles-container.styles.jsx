import styled from 'styled-components';


export const TopArticlesStyled = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    border: 2px solid blue;
`;

export const ArticleMainPreview = styled.div`
    width: 38%;
    height: 400px;
    padding-right: 20px;
    border: 2px solid red;
    @media screen and ( max-width: 1015px ) {
        width: 55%;
    }
    @media screen and ( max-width: 910px ) {
        width: 50%;
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
    width: 33%;
    height: 400px;
    display: flex;
    flex-direction: column;
    border: 2px solid yellow;
    @media screen and ( max-width: 1015px ) {
        width: 40%;
    }
    @media screen and ( max-width: 910px ) {
        width: 50%;
    }
    @media screen and ( max-width: 800px ) {
        width: 55%;
    }
    @media screen and ( max-width: 705px ) {
        width: 100%;
        order: 2;
        margin-top: 80px;
    }
`;

export const ArticleThirdPreview = styled.div`
    width: 29%;
    height: 400px;
    display: flex;
    flex-direction: column;
    border: 2px solid green;

    @media screen and ( max-width: 1015px ) {
        display: none;
    }
`;