import React from "react";
import styled from "styled-components";

const HandleBookContainer = styled.li`
  padding: 8px 0;
  font-size: 24px;
  color: white;
`;

export const HandleBook = ({ book }) => {
  return <HandleBookContainer>{book.title}</HandleBookContainer>;
};
