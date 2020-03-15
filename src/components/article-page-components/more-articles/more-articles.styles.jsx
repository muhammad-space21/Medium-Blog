import styled from 'styled-components';


export const MoreArticlesStyled = styled.div`
    width: 27vw;
    height: fit-content;
`;

export const Heading  = styled.span`
    font-size: 20px;
    line-height: 25px;
    margin-top: 20px;
`;

export const  Title = styled.h1`
    font-size: 13px;
    font-weight: 300;
    color: grey;
    padding-bottom: 5px;
`;

export const ImageWrapper = styled.div`
    width: 100%;
    height: 50%;
    background-size: cover;
    background-position: center;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const Col = styled.div`
    display: flex;
    flex-direction: column;
`;