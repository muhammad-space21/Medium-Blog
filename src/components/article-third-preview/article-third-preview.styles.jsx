import styled from 'styled-components';


export const ArticlesContainer = styled.div`
    width: fit-content;
    height: fit-content;
    margin: 0;
    padding: 0;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
`;

export const ImageContainer = styled.div`
    width: 100%;
    height: 180px;

    img {
        width: 100%;
        height: 100%;
    }
`;

export const TextsHolder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    @media screen and ( max-width: 1119px ) {
        margin-left: 0;
    }
`;

export const ArticleTitle = styled.h1`
    font-size: 17px;
    font-weight: 600;
    line-height: 22px;
    color: black;
    padding-top: 12px;
    &:hover {
        cursor: pointer;
    }
    @media screen and ( max-width: 750px ) {
        font-size: 18px;
    }
`;

export const SecondaryTitle = styled.h1`
    font-size: 13px;
    font-weight: 300;
    line-height: 20px;
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


export const StarIcon = styled.div`
    margin-left: 5px;
    img {
        width: 13px;
        height: 13px;
    }
`;

