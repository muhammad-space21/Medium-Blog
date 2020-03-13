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
    justify-content: space-between; 
    margin-top: 69px;
    @media screen and ( max-width: 800px ) {
        width: 100%;
    } 
`;

export const BodyContainer = styled.div`
    width: 65%;
    height: 100%;
    @media screen and ( max-width: 991px ) {
        width: 70%;
    }
    @media screen and ( max-width: 800px ) {
        width: 60%;
        margin-left: 20px;
        padding-right: 20px;
    }
    @media screen and ( max-width: 750px ) {
        width: 57%;
    }
    @media screen and ( max-width: 730px ) {
        width: 100%;
    } 
`;

export const HeaderContainer = styled.div`
    width: 100%;
    height: fit-content;
`;

export const AsideContainer = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    @media screen and ( max-width: 800px ) {
        width: 35%;
        padding-right: 50px;
    }
    @media screen and ( max-width: 730px ) {
        display: none;
    } 
    @media screen and ( max-width: 750px ) {
        width: 40%;
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