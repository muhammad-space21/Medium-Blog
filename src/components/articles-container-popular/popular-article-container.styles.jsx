import styled from 'styled-components';

export const PopularArticleContainer = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    order: 2;
    margin-top: 100px;
    float: right;
    @media screen and ( max-width: 1015px ) {
        width: 35%;
    }
    @media screen and ( max-width: 900px ) {
        width: 100%;
        order: 2;
    }
`;

export const  Title  = styled.h1`
    font-size: 24px;
    font-weight: 500;
    margin-left: 50px;
`;

export const HR = styled.hr`
    margin-left: -1px;
    width: 70%;
    border: 0.8px solid #CCCCCC;
`;
