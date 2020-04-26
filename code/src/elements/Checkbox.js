import styled from "styled-components";

export const Checkbox = styled.input`
  appearance: none;
  margin-right: 10px;
  height: 23px;
  width: 23px;
  position: relative;
  border: 1px solid #000;
  border-radius: 50%;
  transition: 0.1s;
  background-color: none;
  cursor: pointer;

  &::after {
    position: absolute;
    content: '';
    border: solid #000;
    border-width: 0 1px 1px 0;
    transition: 0.1s;
    top: 2px;
    left: 6px;
    height: 13px;
    width: 7px;
    transform: rotate(30deg);
    opacity: 0;
  }
  &:checked {
    border-color: #ccc;
    &::after {
      opacity: 1;
      border-color: #ccc;
    }
  }
  &:focus, :active {
    border-color: #000;
    box-shadow: 0 0 2px 2px #bbb;
    outline: none;  
    &::after {
      border-color: #000;
    }
  }
  &:hover {
    border-color: #000;
    &::after {
      opacity: 1;
      border-color: #000;
    }
  }
  /* &:checked {
    &:focus, :active {
      &::after {
      border-color: #ccc;
      }
    }
  } */
`;


const Date = styled.span`
  font-size: 12px;
  color: #bbb;
  margin-top: 3px;

`;


