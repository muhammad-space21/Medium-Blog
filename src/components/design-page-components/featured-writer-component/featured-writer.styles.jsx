import styled from 'styled-components';

export const FeaturedWriterStyled = styled.div`
    width: 100%;
    height: 100%;
    background-color: #F2F2F2;
`;

export const Heading = styled.div`
    font-size: 13px;
    line-height: 14px;
    font-weight: 600;
    padding-top: 30px;
    margin-left: 30px;
    text-transform: uppercase;
`;


export const Row = styled.div`
    display: flex;
    flex-flow: row wrap;
    margin-top: 20px;
`;

export const Col1 = styled.div`
    width: 55%;
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    justify-content: space-around;
`;

export const Col2 = styled.div`
    width: 45%;
    display: flex;
    flex-flow: column;
`;

export const ImageWrapper = styled.div`
    width: 130px;
    height: 130px;
    border-radius: 100px;
    background-position: center;
    background-size: cover;
    overflow: hidden;
    margin-bottom: 15px;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h1`
    font-size: 20px;
    font-weight: 500;
    &:hover {
        cursor: pointer;
    }
`;

export const P = styled.p`
    font-size: 12px;
    color: grey;
    line-height: 20px;
`;

export const TextHolder = styled.div`
    width: 50%;
    height: fit-content;
`;

