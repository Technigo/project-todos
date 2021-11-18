import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/macro";
import moment from "moment";

import todo from "reducers/todo";

const OuterContainer = styled.div`
  width: 200px;
  margin: 20px auto;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;
`;
const TodoContainer = styled.div`
  display: flex;
  width: 200px;
`;

const StyledButton = styled.button`
  width: 30px;
  border: none;
`;

const AddTodo = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const onAddTodo = () => {
    dispatch(todo.actions.addTodo(task));
  };

  const taskQuantity = useSelector((store) => store.todo.list.length);

  const date = moment().toNow;

  return (
    <OuterContainer>
      <Header>
        <h1>Todo</h1>
      </Header>
      {taskQuantity}
      <TodoContainer>
        <StyledButton onClick={onAddTodo}>+</StyledButton>
        <input
          placeholder="Add Task"
          type="text"
          value={task}
          onChange={(event) => setTask(event.target.value)}
        />
      </TodoContainer>
    </OuterContainer>
  );
};

export default AddTodo;
