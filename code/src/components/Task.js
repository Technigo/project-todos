import React from "react";
import { todos } from "reducers/todos";
import { useDispatch } from "react-redux";

import moment from "moment";

import styled from "styled-components";
import { BinButton } from "lib/Buttons";
import { InputCheckbox } from "lib/Checkbox";

const Container = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 32px;
  color: black;
  background: #e6e6e6;
  list-style: none;
  margin-bottom: 5px;
`;
const TaskContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TaskLabel = styled.label`
  display: flex;
  align-items: center;
  font-style: italic;
  margin: 10px;
  font-size: 24px;
  font-weight: 700;

  color: ${(props) => (props.done ? "#999999" : "#333333")};
  text-decoration: ${(props) =>
    props.done ? "2px line-through #999999" : "none"};
`;
const Time = styled.p`
  text-align: right;
  margin: 6px;
  font-size: 12px;
  color: #404040;
`;

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <Container>
      <TaskContainer>
        <TaskLabel done={task.complete}>
          <InputCheckbox
            type="checkbox"
            checked={task.complete}
            onChange={() => {
              dispatch(todos.actions.doneTask(task.id));
            }}
          />
          {task.text}
        </TaskLabel>
        <BinButton
          type="button"
          onClick={() => {
            dispatch(todos.actions.removeTask(task.id));
          }}
        ></BinButton>
      </TaskContainer>
      <Time>{moment(task.time).fromNow()}</Time>
    </Container>
  );
};
