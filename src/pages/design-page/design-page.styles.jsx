import styled from 'styled-components';


export const DesignPageStyled = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
`;

export const Content = styled.div`
    width: 90%;
    height: 800px;
    display: flex;
    flex-flow: row wrap;
    border: 2px solid red;
    /* align-items: center; */
    margin-top: 50px;
    /* padding-left: 50px;
    padding-right: 50px; */
    @media screen and ( max-width: 750px ) {
        width: 100%;
        padding: 0px;
        /* display: flex;
        align-items: center; */
    } 
`;

export const BodyContainer = styled.div`
    width: 70%;
    height: 100%;
    border: 2px solid green;
    @media screen and ( max-width: 750px ) {
        width: 100%;
    }

`;

export const AsideContainer = styled.div`
    width: 30%;
    height: 100%;
    border: 2px solid blue;
`;