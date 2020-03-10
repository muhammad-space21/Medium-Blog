import styled from 'styled-components';


export const ArticleMainStyled = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ImageWrapper = styled.div`
    width: 100%;
    height: 60%;
    img {
        width: 100%;
        height: 100%;
    }
`;

export const TextWrapper = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    align-items: space-around;
    justify-content: center;
`;

export const Heading = styled.div`
    font-size: 42px;
    font-weight: 600;
    line-height: 46px;
`;

export const SecondaryTitle = styled.div`
    font-size: 18px;
    color: grey;
    line-height: 24px;
    font-weight: 300;
`;

export const PublishContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`;

export const Avatar = styled.div`
    width: 20%;
    height: 100%;
    border-radius: 50px;
`;

export const Text = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: flex-start;
`;