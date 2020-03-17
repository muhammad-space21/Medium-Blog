import styled from 'styled-components';


export const StyledSignUpPage = styled.div`
    width: 100%;
    height: 49vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
`;

export const FormStyled = styled.form`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ImageWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    img {
        width: 50%;
        height: 50%;
        &:hover {
            width: 55%;
            height: 55%;
            transition: 0.8s;
        }
    }
`;

export const Input = styled.input`
    width: 300px;
    height: 50px;
    border-radius: 15px;
    border-color: #4C50C1;
    margin-top: 20px;
    margin-bottom: 20px;

    &::placeholder {
        font-size: 16px;
        color: #4C50C1;
        font-weight: 400;
        padding-left: 5px;
    }

    &:hover {
        border-color: #77D89E;
        cursor: pointer;
        &::placeholder {
            color: #77D89E;
        }
    }
`;

export const TextWrapper = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -80px;
    margin-bottom: 50px;
`;

export const Title = styled.span`
    font-size: 15px;
    font-weight: 300;
    padding-left: 10px;
    color: grey;
    span {
        color: #77D89E;
        &:hover {
            cursor: pointer;
        }
    }
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


