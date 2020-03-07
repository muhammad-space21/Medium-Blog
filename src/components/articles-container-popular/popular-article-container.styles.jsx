import styled from 'styled-components';

export const PopularArticleContainer = styled.div`
    width: 40%;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    order: 2;
    margin-top: 100px;
    float: right;
    border: 2px solid green;
    @media screen and ( max-width: 835px ) {
        width: 100%;
        order: 2;
    }
`;

export const  Title  = styled.h1`
    font-size: 24px;
    font-weight: 500;
`;

export const HR = styled.hr`
    width: 100%;
    border: 0.8px solid #CCCCCC;
`;