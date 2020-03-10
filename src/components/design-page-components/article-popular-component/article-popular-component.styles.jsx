import styled from 'styled-components';


export const ArticlePopularStyled = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const TextWrapper = styled.div`
    width: 80%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: flex-start;
    margin-right: 7px;
`;

export const Heading = styled.h1`
    font-size: 13px;
    line-height: 19px;
    font-weight: 600;
    padding-top: 20px;
`;

export const TimeOfReading = styled.span`
    font-size: 13px;
    color: #757575;
`;

export const ImageWrapper = styled.div`
    width: 20%;
    height: fit-content;
    img {
        width: 100%;
        height: 65px;
    }
`;