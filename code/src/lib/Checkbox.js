import styled from "styled-components";

export const InputCheckbox = styled.input`
  position: relative;
  appearance: none;
  height: 24px;
  width: 24px;
  margin-right: 10px;
  border-radius: 50%;
  background: #e6e6e6;
  box-shadow:  2px 2px 5px #c4c4c4, -2px -2px 5px #ffffff;
  transition: 0.1s;
  flex-shrink: 0;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    top: 5px;
    left: 4px;
    height: 17px;
    transition: 0.1s;
    width: 17px;
    background-image: url(../assets/check.svg);
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0;
  } 
}
  &:checked {
    background: #e6e6e6;
    box-shadow: inset 2px 2px 5px #c4c4c4, inset -2px -2px 5px #ffffff;
    &::after {
      opacity: 1;
    }
  }
  &:focus, :active {
    outline: none;  
    &::after {
      /* border-color: #000; */
    }
  }
  &:hover {
    background: linear-gradient(145deg, #cfcfcf, #f6f6f6);
    box-shadow:  2px 2px 5px #c4c4c4, -2px -2px 5px #ffffff; transition: 0.1s;
    &::after {
      opacity: 1;
    }
  }
`;
