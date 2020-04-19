import React from "react";
import styled from "styled-components";
import img from "../image/purty-wood.png";
import border from "image/border-wood.jpg";

export const Footer = () => {
  return (
    <Content>
      <Title>Christina Persson 2020</Title>
    </Content>
  );
};

const Title = styled.h1`
  color: green;
  text-align: center;

  font-family: "Pangolin", cursive;
  font-size: 24px;
  color: #fff;

  font-weight: lighter;
`;

const Content = styled.footer`
  background: #426452;
  background-image: url(${img});
  background-repeat: repeat;
  background-size: contain;
  border-radius: 10px 10px 0 0;
  border-top: 5px solid #855418;

  box-shadow: inset 0px 5px 13px 3px #22332a;

  border-image: url(${border}) 30;

  margin-top: 20px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 668px) {
    border-image: none;
  }
`;
