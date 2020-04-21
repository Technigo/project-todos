import React from "react";
import styled from "styled-components";
// import img from "../image/purty-wood.png";
import img from "../image/chalkboard.png";
import border from "image/wood-bottom.png";

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
  background-size: cover;
  background-repeat: repeat;
  background-position: center;
  border-top: 10px solid #855418;

  box-shadow: inset 0px -5px 13px 3px #22332a, -1px -5px 14px 2px #9e8d73;

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
