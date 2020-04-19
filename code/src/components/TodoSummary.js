import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { todos } from "reducers/todos";
import styled from "styled-components";

export const TodoSummary = () => {
  const list = useSelector((store) => store.todos.list);
  const doneList = list.items.filter((item) => item.done);
  const dispatch = useDispatch();
  const [setCount, setSetCount] = useState(false);

  const onRemoveClicked = (event) => {
    dispatch(todos.actions.removeAllTodos());
  };

  const setAll = (event) => {
    setSetCount(!setCount);
    dispatch(todos.actions.setAll());
  };

  return (
    <SummaryWrapper>
      {list.items.length !== 0 && (
        <TaskCount>
          {doneList.length}/{list.items.length} tasks done!
        </TaskCount>
      )}
      {list.items.length === 0 && (
        <GettingStarted>Time to write some tasks!</GettingStarted>
      )}
      <Wrapper>
        {list.items.length > 1 && (
          <Button onClick={onRemoveClicked}>REMOVE ALL</Button>
        )}
        {list.items.length > 1 && (
          <Button onClick={setAll}>
            {setCount ? "UNCHECK ALL" : "CHECK ALL"}
          </Button>
        )}
      </Wrapper>
    </SummaryWrapper>
  );
};

const TaskCount = styled.h2`
  font-family: "Pangolin", cursive;
  text-align: center;
  color: #fff;
  font-weight: lighter;
`;

const GettingStarted = styled.h2`
  font-family: "Pangolin", cursive;
  text-align: center;
  color: #fff;
  font-weight: lighter;
  font-size: 34px;
  margin: 0;
`;

const Button = styled.button`
  display: flex;
  font-family: "Pangolin", cursive;
  font-weight: lighter;
  font-size: 16px;
  color: #fff;

  background: none;

  border-radius: 5px;
  border: 2px dashed #fff;

  margin: 0 10px;

  &:active {
    background: #2a4034;
  }

  @media (max-width: 668px) {
    font-size: 12px;
  }
`;

const Wrapper = styled.div`
  display: flex;
`;

const SummaryWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
`;
