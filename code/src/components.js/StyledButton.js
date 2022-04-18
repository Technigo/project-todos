import styled from "styled-components"

const StyledButton = styled.button`
    appearance: none;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: 1px solid;
    border-color: transparent;
    padding: 8px;
    border-radius: 10px;
    color: #000000ec;
    font-size: ${props => props.fontSize};
    background: linear-gradient(220deg, #c56bf9 0%, #e3c5f4 80%);
    width: ${props => props.width};
    margin: ${props => props.margin};

    &:hover:enabled,
    &:active:enabled,
    &:focus {
        outline: none;
        border: ${props => props.borderHover};
        cursor: pointer;
    }

    &:disabled {
        outline: none;
        border: none;
        opacity: 0.2;
        filter: saturate(90%);
    }


    @media screen and (min-width: 1024px) {
        font-size: ${props => props.fontSizeDesktop};
        width: ${props => props.widthDesktop};
    }
`

export default StyledButton
