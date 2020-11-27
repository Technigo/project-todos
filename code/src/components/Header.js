import React from "react";
import styled from "styled-components";

const HeaderContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #ffff;
  color: "f0f0";
  margin-bottom: 20px;
  height: 100px;
  text-transform: uppercase;
  font-size: 32px;
`;

export const Header = () => {
  return <HeaderContent>Todo List 📝</HeaderContent>;
};
