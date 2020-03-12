import styled from 'styled-components';

export const PopularArticleContainer = styled.div`
    width: 38%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    order: 2;
    margin-top: 100px;
    float: right;
    @media screen and ( max-width: 1015px ) {
        width: 35%;
    }
    @media screen and ( max-width: 950px ) {
        width: 100%;
        order: 2;
    }
`;

export const  Title  = styled.h1`
    font-size: 24px;
    font-weight: 500;
    margin-left: 100px;
    @media screen and ( max-width: 1000px ) {
        margin-left: 20px;
    }
    @media screen and ( max-width: 950px ) {
        margin-left: 20px;
    }
    @media screen and ( max-width: 800px ) {
        margin-left: 0px;
    }
`;

export const HR = styled.hr`
    width: 60%;
    border: 0.8px solid #CCCCCC;
`;
