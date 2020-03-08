import styled from 'styled-components';


export const ArticlesContainer = styled.div`
    width: fit-content;
    height: fit-content;
    margin-bottom: 20px;
    padding: 0;
    display: flex;
    flex-flow: row nowrap;
`;

export const ImageContainer = styled.div`
    width: 40%;
    height: 110px;
    img {
        width: 100%;
        height: 100%;
    }
    @media screen and ( max-width: 720px ) {
        order: 3;
    }
    @media screen and ( max-width: 800px ) {
        width: 30%;
        height: 100px;
    }
    @media screen and ( max-width: 745px ) {
            /* padding-left: 15px; */
    }
`;

export const TextsHolder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 25px;
`;

export const ArticleTitle = styled.h1`
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    color: black;
    &:hover {
        cursor: pointer;
    }
`;

export const SecondaryTitle = styled.h1`
    font-size: 13px;
    font-weight: 300;
    line-height: 15px;
    color: grey;
`;

export const AuthorInfo = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
`;

export const AuthorName = styled.span`
    font-size: 13px;
    font-weight: 500;
    line-height: 20px;
    margin-right: 5px;
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;

export const AuthorLocation = styled.span`
    font-size: 13px;
    font-weight: 500;
    line-height: 20px;
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;

export const PublishInfo = styled.div`
    width:  fit-content;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const PublishDate = styled.span`
    font-size: 12px;
    color: #757575;
    margin-right: 5px;
`;

export const TimeOfReading = styled.span`
    font-size: 12px;
    color: #757575;
`;

export const ImgWrapper = styled.div`
    display: none;
    @media screen and ( max-width: 700px ) {
        display: block;
        order: 2;
    }

    img {
        width: 20px;
        height: 25px;
        /* margin-bottom: 3px; */
        margin-top: 77px;
        margin-right: 25px;
        /* margin-left: -20px; */
        &:hover {
            cursor: pointer;
        }
    }
`;



