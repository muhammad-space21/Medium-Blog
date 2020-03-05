import styled, {css} from 'styled-components';

const getButtonStyles = props => {
    if (props.primaryBig) {
        return BtnPrimaryBig;
    }
    return StyledButton;
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