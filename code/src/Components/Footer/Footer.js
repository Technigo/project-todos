import React from "react";
import styled from "styled-components";

import {CategoryFilter} from './CategoryFilter'

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
  background-color: rgb(238, 238, 238);
  position: fixed;
  bottom: 0;
`;
