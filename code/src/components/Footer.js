import React from "react";
import styled from "styled-components";

import { AddTodo } from "./AddTodo";

export const Footer = () => {
  return (
    <FooterContainer>
      <AddTodo />
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e8e8e8;
  padding: 10px;
  margin: 20px 0;
  width: 90%;
`;
