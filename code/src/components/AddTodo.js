import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/macro";
import moment from "moment";

import todo from "reducers/todo";
import { Section, StyledButton } from "./GlobalStyledComponents";

const OuterHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f2f2f2;
  border-bottom: 1px solid #d9d9d9;
  padding: 10px;
  width: 100%;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.h1`
  font-size: 20px;
  font-weight: 500;

  margin: 0;
`;

const StyledDate = styled.div`
  font-size: 14px;
  color: #808080;
  margin: 0;
`;

const RemoveButton = styled.div`
  font-size: 10px;
  color: white;
  padding: 2px;
  background-color: #3385ff;
  border-radius: 5px;
  margin-top: 3px;
`;

const TodoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  height: 55px;
  border-bottom: 1px solid #d9d9d9;
`;

const StyledInput = styled.input`
  border: none;
  width: 270px;
  height: 53px;
`;

const AddTodo = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const onAddTodo = () => {
    dispatch(todo.actions.addTodo(task));
    setTask("");
  };

  const onRemoveAll = () => {
    dispatch(todo.actions.removeAll());
  };

  const taskQuantity = useSelector((store) => store.todo.list.length);

  const date = moment().format("MMMM Do");

  return (
    <Section>
      <OuterHeaderContainer>
        <HeaderContainer>
          <Header>Todo</Header>
          <StyledDate>{date}</StyledDate>
        </HeaderContainer>
        <HeaderContainer>
          {!taskQuantity ? "" : taskQuantity}
          <RemoveButton onClick={onRemoveAll}>Clear all</RemoveButton>
        </HeaderContainer>
      </OuterHeaderContainer>
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

export default AddTodo;
