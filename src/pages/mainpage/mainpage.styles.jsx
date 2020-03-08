import styled from 'styled-components';



export const MainPageStyled = styled.div`
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    margin-left: 20px;
    margin-right: 20px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items:flex-start;
    justify-content: space-between;
`; 

export const HR = styled.hr`
    width: 90%;
    border: 0.8px solid #CCCCCC;
    @media screen and ( max-width: 700px ) {
        display: none;    
    }
`;

export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: flex-end;
    padding-right: 100px;
    @media screen and ( max-width: 750px ) {
        order: 3;
        margin-top: 30px;
        margin-left: 20px;
    }
    @media screen and ( max-width: 1000px ) {
    justify-content: flex-start;
    }
`;