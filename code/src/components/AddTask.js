import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components/macro";

import todo from "reducers/todo";
import { Section, StyledButton } from "./GlobalStyledComponents";

const TodoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  height: 55px;
  border-bottom: 1px solid #d9d9d9;

  @media (min-width: 768px) {
    width: 500px;
    height: 70px;
  }

  @media (min-width: 992px) {
    margin-left: 30px;
  }
`;

const StyledInput = styled.input`
  border: none;
  width: 270px;
  height: 53px;
  font-size: 16px;

  @media (min-width: 768px) {
    width: 390px;
    height: 67px;
  }

  @media (min-width: 992px) {
    width: 890px;
  }
`;

const AddTask = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const onAddTodo = () => {
    dispatch(todo.actions.addTodo(task));
    setTask("");
  };

  return (
    <Section>
      <TodoContainer>
        <StyledButton onClick={onAddTodo}>
          <span className="emoji" role="img" aria-label="plus sign">
            ➕
          </span>
        </StyledButton>
        <StyledInput
          placeholder="Add Task"
          type="text"
          value={task}
          onChange={(event) => setTask(event.target.value)}
        />
      </TodoContainer>
    </Section>
  );
};

export default AddTask;
