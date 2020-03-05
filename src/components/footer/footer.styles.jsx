import styled from 'styled-components';


export const FooterMain = styled.div`
    width: 100%;
    height: 265px;
    background-color: #000000;
    margin-top: 80px;
    img {
        width: 35px;
        height: 35px;
        margin-top: 50px;
        margin-left: -16px;
        margin-bottom: 10px;
    }
`;

export const H1 = styled.h1`
    font-size: 15px;
    color: #FFFFFF;
    margin-right: 33px;
    margin-left: -14px;
    margin-top: 20px;
    &:hover {
        cursor: pointer;
    }
`;

export const H2 = styled.h2`
    font-size: 15px;
    color: #999999;
    margin-right: 40px;
    margin-top: 20px;
`;

export const H6 = styled.h6`
    font-size: 13px;
    color: #999999;
    margin-left: -14px;
    margin-top: 15px;
`; 


export const Row1 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:  flex-start;
    width: 160%;
`;

export const Row2 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 160%;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-end;
    justify-content: flex-end;
    margin-right: -50px;
`;

export const Image1 = styled.div`
    margin-top: -50px;
    margin-right: 30px;

    img {
        width: 160px;
        height: 60px;
        &:hover {
            cursor: pointer;
        }
    }
`;

export const Image2 = styled.div`
    margin-top: -110px;
    margin-right: 30px;
    img {
        width: 155px;
        height: 150px;
        &:hover {
            cursor: pointer;
        }
    }
`;

