import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import moment from "moment";

import { todos } from "../reducers/todos";
import { ClearAllButton } from "./ClearAllButton";

export const Header = () => {
  const items = useSelector(store => store.todos.items);
  const dispatch = useDispatch();

  /*const filteredComplete = items.todos.items.filter(
    item => item.isComplete === !isComplete
  );*/

  //const todaysDate = useSelector(store => store.todos.todaysDate);
  const incompleteTasks = items.filter(item => item.isComplete === true);
  //var today = new Date();
  console.log("incompleteTasks" + incompleteTasks);
  return (
    <HeaderContainer>
      <h1>To Do List</h1>
      <span>{moment().format("ddd Do MMMM")}</span>
      <p>Tasks to complete: </p>
      <p>Total tasks: {items.length}</p>
      <ClearAllButton />
    </HeaderContainer>
  );
};

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #e8e8e8;
  /*margin: 0;*/
  padding: 10px;
`;
