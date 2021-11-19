import styled from "styled-components"

export const CheckboxStyled = styled.input`
  position: relative;
  appearance: none;
  height: 24px;
  width: 24px;
  margin-right: 10px;
  background: #fff;
  transition: 0.1s;
  flex-shrink: 0;
  cursor: pointer;
  // box-shadow: inset 1px 1px 2px var(--grey);
  border: 1px solid var(--grey);
  border-radius: 50px;

  &::after {
    content: "";
    position: absolute;
    top: -4px;

    left: -4px;
    height: 30px;
    width: 30px;
    transition: 0.5s;
    background-image: url(../check.svg);
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0;
  }

  &:checked {
    &::after {
      opacity: 1;
    }
  }

  &:focus,
  :active {
    outline: none;
  }
`
