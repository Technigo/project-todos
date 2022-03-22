import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const AmountTask = styled.p`
  font-weight: bolder;
  font-family: "Indie Flower", cursive;
  color: whitesmoke;
`;

const AmountTasks = () => {
  //useSelector
  const amountTasks = useSelector((store) => store.todos.items.length);

  return <AmountTask>Tasks to do: {amountTasks}</AmountTask>;
};
export default AmountTasks;
