import styled from "styled-components";

export const PrimaryButton = styled.input`
  font-family: "Pangolin", cursive;
  font-size: 24px;
  color: #fff;

  margin: 5px;
  padding: 0 5px;
  width: 150px;
  height: 30px;

  font-weight: lighter;
  background: none;

  border-radius: 5px;
  border: 2px dashed #fff;

  &:active {
    background: #2a4034;
  }
`;
