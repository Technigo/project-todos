import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const DeleteBtn = styled.button`
  background-color: white;
  border: 2px solid grey;
  border-radius: 100%;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;

  &:hover {
    animation: ${rotate} 2s linear infinite;
    border: 2px solid palevioletred;
  }

  @media (min-width: 769px) {
    padding: 16px;
  }
`;
