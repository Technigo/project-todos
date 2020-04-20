import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  font-family: "Pangolin", cursive;
  font-weight: lighter;
  font-size: 16px;
  color: #fff;

  background: none;

  border-radius: 5px;
  border: 2px dashed #fff;

  margin: 0 10px;

  &:active {
    background: #2a4034;
  }

  @media (max-width: 668px) {
    font-size: 12px;
  }
`;
