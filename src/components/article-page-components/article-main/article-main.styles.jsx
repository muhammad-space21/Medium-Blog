import styled from 'styled-components';


export const ArticleMainStyled = styled.div`
    width: 55vw;
    display: flex;
    flex-direction: column;
`;

export const ComponentHolder = styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    @media screen and ( max-width: 900px ) {
        display: flex;
        flex-direction: column;
    }
`;

export const Heading = styled.span`
    font-size: 30px;
    font-weight: 600;
    margin-top: 50px;
`;

export const ImageWrapper = styled.div`
    width: 100%;
    height: 450px;
    background-position: center;
    background-size: cover;
    margin-top: 50px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        &:hover {
            cursor: zoom-in;
        }
    }
`;

export const TextWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    margin-bottom: 40px;
`;

export const P = styled.div`
    font-size: 20px;
    line-height: 35px;
    text-align: start;
    font-weight: 300;
    color: #292929;
    margin-top: 10px;
    margin-bottom: 20px;
`;

export const TitleMain = styled.span`
    font-size: 25px;
    line-height: 35px;
    font-weight: 600;
`;

export const TitleSecondary = styled.span`
    font-size: 21px;
    line-height: 32px;
    font-weight: 600;
    margin-top: 20px;
`;