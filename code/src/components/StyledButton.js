import React from "react";
import styled from "styled-components";

export const StyledButton = ({ btnText, fontSize, onClick }) => {
  const StyledButton = styled.button`
    background: #426452;
    border-radius: 5px;

    &:active {
      background: #2a4034;
    }
  `;

  const ButtonText = styled.p`
  font-family: "Pangolin", cursive;
  color: #fff;
  font-weight: lighter;
  font-size: font-size: ${fontSize ? fontSize : "16px"}
  `;

  return (
    <StyledButton onClick={onClick}>
      <ButtonText>{btnText}</ButtonText>
    </StyledButton>
  );
};
