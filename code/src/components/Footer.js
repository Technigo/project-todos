import React from "react";
import styled from "styled-components";

export const Footer = () => {
  return (
    <FooterDiv>
      <Text>Designed and developed by Anna Thunberg</Text>
    </FooterDiv>
  );
};

const FooterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 70px auto 20px;

  @media (min-width: 700px) {
    margin: 100px auto 20px;
  }

  @media (min-width: 1100px) {
    margin: 100px auto 20px;
  }
`;

const Text = styled.h3`
  color: #ea86b6;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  margin: 20px auto;

  @media (min-width: 700px) {
    font-size: 18px;
  }
`;
