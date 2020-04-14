import styled from 'styled-components';

export const StyledContainer = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    padding-left: 250px;
    /* border: 2px solid green; */
    margin-top: 30px;
    margin-bottom: 30px;
    @media screen and (max-width: 992px ) {
        padding-left: 100px;
    }
    @media screen and ( max-width: 800px ) {
        padding-left: 10px;
    }
`;

export const Row = styled.div`
    width: 60%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    /* border: 2px solid red; */
    @media screen and ( max-width: 1000px ) {
        width: 100%;
    }
    @media screen and ( max-width: 768px ) {
        display: flex;
        flex-direction: column;
    }
`;

export const RowHide = styled.div`
    width: 60%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    @media screen and ( max-width: 1000px ) {
        width: 100%;
    }
    @media screen and ( max-width: 768px ) {
        display: none;
    }
`;

export const HeadingBig = styled.span`
    font-size: 44px;
    line-height: 48px;
    font-weight: 1000;
    margin-bottom: 20px;
    text-transform:capitalize;
`;

export const TextStyled = styled.div`
    color: #6F6F6F;
    font-weight: 400;
    font-size:16px;
    text-transform:normal;
`;
