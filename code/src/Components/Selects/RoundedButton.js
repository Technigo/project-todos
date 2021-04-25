import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

export const RoundedButton = ({ buttonSymbol, buttonText, action }) => {
  const dispatch = useDispatch();

  return (
    <ButtonContainer onClick={() => dispatch(action)}>
      <Button type="button">{buttonSymbol}</Button>
      <ButtonText>{buttonText}</ButtonText>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  height: 15px;
  background: transparent;
  border: none;
  margin-top: 10px;
  padding: 0;
  padding-left: 10px;
`;
const Button = styled.div`
  width: fit-content;
  height: 15px;
  width: 15px;
  background-color: rgb(137, 177, 187);
  border: solid white 0.5px;
  border-radius: 10px;
  color: white;
  outline: none;
  font-size: 11px;

  &:hover,
  &:focus {
    background: rgb(90, 150, 187);
  }
`;

const ButtonText = styled.p`
  color: white;
  margin: 0;
  margin-left: 5px;
`;
