import styled from 'styled-components';


export const NavBottomStyled = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    @media screen and ( max-width: 835px ) {
        display: none;
    }
`;

export const Row1 = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 30px;
`;
export const Row2 = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 30px;
`;

export const H1 = styled.h1`
    font-size: 13px;
    line-height: 22px;
    font-weight: 400;
    color: #757575;
    margin-left: 15px;
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;