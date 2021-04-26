import React from "react";
import styled from "styled-components";

import { CategoryFilter } from "./CategoryFilter";

export const Footer = () => {
  return (
    <Container>
      <CategoryFilter />
    </Container>
  );
};

const Container = styled.footer`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e9e2d0;
  position: fixed;
  bottom: 0;
  

  @media (min-width: 768px) {
    width: 510px;
  }
`;
