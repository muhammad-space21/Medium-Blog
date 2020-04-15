import styled from 'styled-components';


export const StyledContainer = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }
`;

export const Row = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: row;
    margin-right: 20px;
    text-align: ${props => (props.center ? 'center' : 'end')};
    span {
        font-size: 13px;
    }
    img {
        width: 17px;
        height: 17px;
        margin-right: 5px;
    }
`;
