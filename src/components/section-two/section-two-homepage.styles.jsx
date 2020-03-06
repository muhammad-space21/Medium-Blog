import styled from 'styled-components';

export const HeadingMain2 = styled.h1`
    font-size: 85px;
    font-weight: medium;
    color: black;
    text-align: left;
    padding-top: 100px;
    font-family: 'Caladea';
    font-weight: 500;
    line-height: 70px;
    color: #292929;
    @media screen and ( max-width: 1030px ) {
        padding-top: 100px;
    }
    @media screen and ( max-width: 850px ) {
        font-size: 70px;
        padding-top: 100px; 
    }
    @media screen and ( max-width: 750px ) {
        font-size: 32px;
        line-height: 36px;
    }
`;

export const SectionTwoStyled = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between; 
    align-items: center;
`;

export const H2 = styled.div`
    font-size: 17px;
    color: #757575;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    margin-top: 20px;
`;

export const H2Bold3 = styled.h2`
    font-size: 17px;
    font-weight: 600;
    text-align: start;
    margin-top: 50px;
    margin-bottom: 50px;
`;

export const ButtonHolder = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 285px;
`;

export const HR = styled.hr`
    border-bottom: 0.5px solid #CCCCCC;
    margin-top: 70px; 
    width: 40%;
`;

export const P = styled.p`
    font-size: 20px;
    color: rgba(0, 0, 0, 0.54);
    line-height: 32px;
    font-weight: 300;
    text-align: start;
    span {
        background-color: #CEFCE9;
    }
`;

