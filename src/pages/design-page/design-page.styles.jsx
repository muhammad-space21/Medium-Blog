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
    justify-content: center; 
    align-items: center;
    margin-top: 50px;
    @media screen and ( max-width: 750px ) {
        width: 100%;
    } 
`;

export const BodyContainer = styled.div`
    width: 70%;
    height: 100%;
    border: 2px solid green;
    @media screen and ( max-width: 1000px ) {
        width: 65%;
    }
    @media screen and ( max-width: 900px ) {
        width: 60%;
    }
    @media screen and ( max-width: 800px ) {
        width: 55%;
    }
    @media screen and ( max-width: 750px ) {
        width: 100%;
    }
`;

export const AsideContainer = styled.div`
    width: 30%;
    height: 100%;
    border: 2px solid blue;
    @media screen and ( max-width: 1000px ) {
        width: 35%;
    }
    @media screen and ( max-width: 900px ) {
        width: 40%;
    }
    @media screen and ( max-width: 800px ) {
        width: 45%;
    }
    @media screen and ( max-width: 550px ) {
        display: none;
    } 
`;