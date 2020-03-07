import styled from 'styled-components';

export const ArticleBodyStyled = styled.div`
    width: 60%;
    height: 800px;
    margin-top: 100px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px solid purple;
    @media screen and ( max-width: 1015px ) {
        width: 65%;
    }
    @media screen and ( max-width: 835px ) {
        width: 100%;
    }
`;