import styled from 'styled-components';

export const ArticleBodyStyled = styled.div`
    width: 62%;
    height: 100%;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    @media screen and ( max-width: 1015px ) {
        width: 65%;
    }
    @media screen and ( max-width: 950px ) {
        width: 100%;
    }
`;