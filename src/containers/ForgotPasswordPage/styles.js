import styled from 'styled-components';

export const StyledContainer = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    background-color: #EFF0F0;
`;

export const FormStyled = styled.form`
    width: 100%;
    margin-top: 50px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
`;

export const TextWrapper = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
`;

export const Heading = styled.span`
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 10px;
    @media screen and ( max-width: 710px ) {
        font-size: 20px;
        line-height: 30px;
    }
`;

export const ResendCodeBtn = styled.button`
    font-size: 16px;
    font-weight: 400;
    color: #77D89E;
    margin-top: 50px;
    border: none;
    &:hover {
        cursor: pointer;
        text-decoration: none;
        color: #77D89E;
    }
    &:focus {
        outline: none;
    }
`;

export const Container = styled.div`
    width: 350px;
    height: fit-content;
    margin-top: 12px;
    margin-bottom: 20px;
`;

export const Title = styled.span`
    font-size: 15px;
    font-weight: 400;
    padding-left: 10px;
    color: grey;
    span {
        color: #77D89E;
        font-weight: 500;
        &:hover {
            cursor: pointer;
        }
    }
`;

export const ErrorMessage = styled.div`
    width: 350px;
    font-size: 14px;
    line-height: 20px;
    color: red;
    text-align: left;
`;
