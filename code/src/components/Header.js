import React from "react";
import styled from "styled-components";
// import img from "../image/purty-wood.png";
import img from "../image/chalkboard.png";
import border from "image/wood-top.png";

export const Header = () => {
  return (
    <Content>
      <Title>
        <Emoji role="img" aria-label="pen">
          ✏️
        </Emoji>{" "}
        TODO{" "}
        <Emoji role="img" aria-label="crayon">
          🖍
        </Emoji>
      </Title>
    </Content>
  );
};

const Emoji = styled.span`
  font-size: 60px;
  @media (max-width: 668px) {
    font-size: 35px;
  }
`;

const Title = styled.h1`
  color: green;
  margin: 20px 0;
  text-align: center;

  font-family: "Pangolin", cursive;
  font-size: 74px;
  color: #fff;

  font-weight: lighter;

  @media (max-width: 668px) {
    font-size: 45px;
  }
`;

const Content = styled.header`
  background: #426452;
  background-image: url(${img});
  background-size: cover;
  background-repeat: repeat;
  border-radius: 0 0 10px 10px;
  border-bottom: 10px solid #855418;

  box-shadow: inset 0px -5px 13px 3px #22332a, -2px 3px 13px 3px #9e8d73;

  border-image: url(${border}) 30;

  margin-bottom: 20px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 668px) {
    border-image: none;
  }
`;
