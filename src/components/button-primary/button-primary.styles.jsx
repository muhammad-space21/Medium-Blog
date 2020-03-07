import styled, {css} from 'styled-components';

const getButtonStyles = props => {
    if (props.updateBtn) {
        return  UpdateBtn;
    } else if (props.primaryBig) {
        return BtnPrimaryBig
    } else {
        return StyledButton
    }
};


export const StyledButton = styled.button`
    width: 150px;
    height: 36px;
    background: #03A87C;
    font-size: 13px;
    font-weight: 500;
    text-align: center;
    border: none;
    opacity: 100%;
    outline: none;
    color: white;
    border-radius: 3px;

    &:hover {
        background-color: #029E74;
        cursor: pointer;
    }

    ${getButtonStyles}
`;

export const BtnPrimaryBig = css`
    width: 337px;
    height: 61px;
    background: #03A87C;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    border: none;
    &:hover {
        background-color: #029E74;
        cursor: pointer;
    }
`;

export const UpdateBtn = css`
    width: 100px;
    height: 36px;
    background-color: white;
    border: 1px solid;
    border-color: grey;
    font-size: 11px;
    font-weight: 500;
    color: black;
    text-align: center;
    border-radius: 5px;
    &:hover {
        border-color: black;
        cursor: pointer;
        color: black;
        background-color: white;
    }


`;