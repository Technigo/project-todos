import React from "react";
import styled from "styled-components";
import shredder from "../assets/shredder.svg";
import { Container } from "styledelements/elements";

const Error = () => {
  return (
    <Container>
      <Wrapper>
        <ErrorPageIcon src={shredder} alt="paper shredder." />
        <h2 tabIndex="0">This page doesn't exist.</h2>
        <h2 tabIndex="0">Click on the title above to go home.</h2>
      </Wrapper>
    </Container>
  );
};

export default Error;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

const ErrorPageIcon = styled.img`
  width: 200px;
  height: 200px;
  margin: 20px auto 0 auto;
`;
