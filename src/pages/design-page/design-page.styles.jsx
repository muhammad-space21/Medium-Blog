import styled from 'styled-components';


export const DesignPageStyled = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
`;

export const Content = styled.div`
    width: 100%;
    height: 800px;
    display: flex;
    flex-direction: row;
    border: 2px solid red;
    padding-left: 50px;
    margin-top: 50px;
    padding-right: 50px;
`;

export const BodyContainer = styled.div`
    width: 70%;
    height: 100%;
    border: 2px solid green;

`;

export const AsideContainer = styled.div`
    width: 30%;
    height: 100%;
    border: 2px solid blue;
`;