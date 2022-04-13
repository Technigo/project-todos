import React from "react";
import styled from "styled-components/macro";
import shredder from "../assets/shredder.svg";

const Error = () => {
  return (
    <Wrapper>
      <ErrorPageIcon src={shredder} alt="paper shredder" />
      <h2>This page doesn't exist.</h2>
      <h2>Click on the title above to go home.</h2>
    </Wrapper>
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
