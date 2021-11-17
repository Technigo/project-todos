import styled from "styled-components";

export const SelectionBtn = styled.button`
  background-color: white;
  border: 2px solid grey;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  font-size: 14px;
  padding: 10px;
  border-radius: 30px;
  color: grey;
  font-weight: bolder;
  transition: 0.1s ease-in;

  &:hover {
    border: 2px solid palevioletred;
    color: palevioletred;
  }

  @media (min-width: 769px) {
    font-size: 16px;
    padding: 16px;
  }
`;
