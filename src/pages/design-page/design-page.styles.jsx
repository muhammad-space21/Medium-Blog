import styled from 'styled-components';


export const DesignPageStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
`;

export const Content = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    flex-flow: row wrap;
    border: 2px solid red;
    justify-content: space-between; 
    margin-top: 69px;
    @media screen and ( max-width: 800px ) {
        width: 100%;
    } 
`;

export const BodyContainer = styled.div`
    width: 65%;
    height: 100%;
    border: 2px solid green;
    @media screen and ( max-width: 1000px ) {
        width: 65%;
    }
    @media screen and ( max-width: 900px ) {
        width: 60%;
    }
    @media screen and ( max-width: 850px ) {
        width: 58%;
    }
    @media screen and ( max-width: 800px ) {
        width: 100%;
    }
`;

export const HeaderContainer = styled.div`
    width: 100%;
    height: fit-content;
    border: 2px solid purple;
`;

export const AsideContainer = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    border: 2px solid blue;
    @media screen and ( max-width: 1000px ) {
        width: 35%;
    }
    @media screen and ( max-width: 900px ) {
        width: 40%;
    }
    @media screen and ( max-width: 850px ) {
        width: 42%;
    }
    @media screen and ( max-width: 800px ) {
        display: none;
    } 
`;

export const Heading = styled.h1`
    font-size: 13px;
    line-height: 14px;
    font-weight: 600;
    margin-top: 30px;
    margin-bottom: -5px;
    text-transform: uppercase;
`;

export const HR = styled.hr`
    width: 100%;
    border: 0.8px solid #CCCCCC;
`;