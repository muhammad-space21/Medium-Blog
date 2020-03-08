import styled from 'styled-components';


export const ArticlesContainer = styled.div`
    width: fit-content;
    height: fit-content;
    margin-bottom: 40px;
    padding: 0;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
`;

export const ImageContainer = styled.div`
    width: 35%;
    height: 150px;
    padding-left: 30px;
    img {
        width: 100%;
        height: 100%;
    }
    @media screen and ( max-width: 800px ) {
        width: 30%;
        height: 100px;
    }
    @media screen and ( max-width: 745px ) {
        padding-left: 15px;
    }
`;

export const TextsHolder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 80px;
    @media screen and ( max-width: 1100px ) {
        margin-left: 0px;
    }
`;

export const H1 = styled.div`
    font-size: 13px;
    font-weight: 300;
    color: grey;
`;

export const TypeOfTopic = styled.span`
    font-size: 13px;
    font-weight: 300;
    color: grey;
    span {
        font-size: 12px;
        font-weight: 300;
        color: grey;
        font-style: italic;
        margin-left: 3px;
    }
`;

export const ArticleTitle = styled.h1`
    font-size: 20px;
    font-weight: 600;
    line-height: 28px;
    color: black;
    &:hover {
        cursor: pointer;
    }
    @media screen and ( max-width: 735px ) {
        font-size: 14px;
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

export const IconWrapper = styled.div`
    width: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 100px;
    img {
        width: 30px;
        height: 30px;
        margin-left: 5px;
        &:hover {
            cursor: pointer;
        }
    }
`;

export const ImgWrapper = styled.div`
    img {
        width: 20px;
        height: 25px;
        margin-bottom: 3px;
        @media screen and ( max-width: 745px ) {
            position: absolute;
            margin-left: -30px;
            margin-top: -20px;    
        }
    }
`;

export const ImgMenu = styled.div`
    @media screen and ( max-width: 745px ) {
        display: none;
    }
`;

