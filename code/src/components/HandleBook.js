import React from "react";
import styled from "styled-components";

const HandleBookContainer = styled.li`
  align-self: center;
  padding: 8px;
  font-size: 42px;
  color: black;
`;

export const HandleBook = ({ book }) => {
  return (
    <HandleBookContainer>{book}</HandleBookContainer>
  );
};  