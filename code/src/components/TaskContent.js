import React from "react";

import { Header } from "./Header";
import { ItemAdded } from "./ItemAdded";
import { ItemList } from "./ItemList";
import { ItemRemoved } from "./ItemRemoved";

import styled from "styled-components";

export const TaskContent = () => {
  return (
    <Task>
      <div>
        <Header />
        <ItemAdded />
        <ItemList />
        <ItemRemoved />
      </div>
    </Task>
  );
};
export const Task = styled.div`
  width: 350px;
  margin: 70px 0px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: flex-start;
  background-color: #fff;
  padding: 5px 20px;
  border-radius: 10px;
  border: 2.5px solid #e18ea0;
  font-family: "Inconsolata", monospace;
  box-sizing: border-box;

  @media (max-width: 668px) {
    width: 300px;
    margin: 10px;
    display: flex;
    padding: 5px;
    font-size: 12px;
    flex-direction: column;
    align-items: center;
  } ;
`;
