import React from "react";
import styled from "styled-components";

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
`;

const Title = styled.h1`
  color: green;
  margin: 0;
  text-align: center;

  font-family: "Cabin Sketch", cursive;
  font-size: 74px;
  color: #fff;

  font-weight: lighter;
`;

const Content = styled.header`
  background: #426452;
  margin-bottom: 20px;
  height: 150px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
