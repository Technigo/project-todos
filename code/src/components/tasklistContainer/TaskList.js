import React from "react";
import styled from "styled-components";

//Stlyed components
const ListWrapper = styled.ul`
  display: flex;
  align-items: center;
  margin-top: 4px;
  padding: 5px;
  list-style-type: none;
  background-color: rgb(228, 216, 220);
  color: rgb(0, 30, 108);
  flex-grow: 1;
`;
const Task = styled.li`
  padding: 0 5px;
`;

const TaskList = ({ itemId, itemTask }) => {
  return (
    <ListWrapper key={itemId}>
      <Task>{itemTask}</Task>
    </ListWrapper>
  );
};
export default TaskList;
