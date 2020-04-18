import React from "react";
import styled from "styled-components";

export const Footer = () => {
  return (
    <Content>
      <Title>Christina Persson 2020</Title>
    </Content>
  );
};

const Emoji = styled.span`
  font-size: 60px;
`;

const Title = styled.h1`
  color: green;
  text-align: center;

  font-family: "Cabin Sketch", cursive;
  font-size: 24px;
  color: #fff;

  font-weight: lighter;
`;

const Content = styled.footer`
  background: #426452;
  margin-top: 20px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
