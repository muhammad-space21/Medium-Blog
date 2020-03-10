import styled from 'styled-components';


export const ArticlesContainer = styled.div`
    width: 93%;
    height: fit-content;
    margin-bottom: 40px;
    padding: 0;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    @media screen and ( max-width: 980px ) {
        width: 95%;

    }
`;

export const ImageContainer = styled.div`
    width: 30%;
    height: 150px;
    img {
        width: 100%;
        height: 100%;
        object-fit: fill;
    }
    @media screen and ( max-width: 980px ) {
        width: 35%;
        height: 90px;
    }
    @media screen and ( max-width: 800px ) {
        width: 40%;
        height: 90px;
    }
`;

export const TextsHolder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    @media screen and ( max-width: 1100px ) {
        margin-left: 0px;
    }
    @media screen and ( max-width: 980px ) {
        width: 65%;
    }
    @media screen and ( max-width: 800px ) {
        width: 60%;
    }
`;

export const H1 = styled.div`
    font-size: 13px;
    font-weight: 300;
    color: grey;
`;

export const ArticleTitle = styled.h1`
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    color: black;
    &:hover {
        cursor: pointer;
    }
    @media screen and ( max-width: 735px ) {
        font-size: 18px;
        line-height: 22px;

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
    margin-top: 100px;
    img {
        width: 20px;
        height: 25px;
        padding-left: -50px;
        @media screen and ( max-width: 745px ) {
            position: absolute;
            margin-left: -20px;
            margin-top: -25px;    
        }
        &:hover {
            cursor: pointer;
        }
    }
`;




