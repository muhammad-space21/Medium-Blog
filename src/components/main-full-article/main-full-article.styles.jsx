import styled from 'styled-components';


export const StyledContainer = styled.div`
    width: 50%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    margin-left: 200px;
    margin-bottom: 50px;
    @media screen and ( max-width: 992px ) {
        width: 60%;
        margin-left: 10px;
        margin-right: 10px;
    }
    @media screen and ( max-width: 768px ) {
        width: 100%;
    }
`;

export const Header = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
`;

export const TextWrapper = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-bottom: 40px;
`;

export const AuthorNamesContainer = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: row;
`;

export const IconWrapper = styled.div`
    width: 70%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
`;

export const ImageWrapper = styled.div`
    width: 100%;
    height: 60%;
    background-position: center;
    background-size: cover;
    margin-bottom: 40px;
    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`;

export const Paragraph = styled.div`
    width: 100%;
    height: fit-content;
`;

export const P = styled.div`
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    margin-top: 30px;
    margin-bottom: 30px;
`;



