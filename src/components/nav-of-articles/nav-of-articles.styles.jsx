import styled from 'styled-components';

export const StyledContainer = styled.div`
    width: 100%;
    height: 63px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #D5D7D8;
    margin-bottom: 30px;
    margin-top: 30px;
    @media screen and ( max-width: 768px ) {
        display: flex;
        flex-direction: column;
    }
`;

export const TitleActive = styled.div`
    width: 20%;
    height: 100%;
    background-color: #EEEFEF;
    border-bottom: 4px solid black;
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    h1 {
        font-size: 14px;
        font-weight: 500;
        text-transform: uppercase;
        margin-top: 15px;
        margin-left: 100px;
        @media screen and ( max-width: 768px ) {
            margin-left: 0px;
        }
    }
    img {
        width: 20px;
        height:  20px;
        margin-top: 5px;
        margin-right: 5px;
        display: none;
        @media screen and ( max-width: 768px ) {
            display: block;
        }
    }
    &:hover {
        cursor: pointer;
    }
    @media screen and ( max-width: 992px ) {
        width: 30%;
    }
    @media screen and ( max-width: 768px ) {
        width: 100%;
        text-align: start;
        padding-left: 10px;
    }
`;


export const TitleSecond = styled.div`
    width: 20%;
    height: 100%;
    text-align: center;
    h1 {
        font-size: 14px;
        font-weight: 500;
        text-transform: uppercase;
        margin-top: 25px;
    }
    &:hover {
        cursor: pointer;
    }
    @media screen and ( max-width: 992px ) {
        width: 30%;
    }
    @media screen and ( max-width: 768px ) {
        display: none;
        border-bottom: 1px solid grey;
    }
`;

export const TitleThird = styled.div`
    width: 20%;
    height: 100%;
    text-align: center;
    h1 {
        font-size: 14px;
        font-weight: 500;
        text-transform: uppercase;
        margin-top: 25px;
    }
    &:hover {
        cursor: pointer;
    }
    @media screen and ( max-width: 992px ) {
        width: 30%;
    }
    @media screen and ( max-width: 768px ) {
        display: none;
        border-bottom: 1px solid grey;
    }
`;

