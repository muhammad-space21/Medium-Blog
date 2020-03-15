import styled from 'styled-components';


export const WriterInfoStyled = styled.div`
    width: 300px;
    height: fit-content;
    display: flex;
    flex-direction: row;
`;

export const Avatar = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 100px;
    background-size: cover;
    background-position: center;
    overflow: hidden;
    border-top: 1px solid green;
    border-bottom: 1px solid green;
    &:hover {
        cursor: pointer;
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const TextWrapper = styled.div`
    width: fit-content;
    height: fit-content;
`;