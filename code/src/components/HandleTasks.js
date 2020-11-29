import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { todos } from "reducers/todos";

import styled from "styled-components";
import { Button } from "lib/Buttons";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const NumberOfTasksCompleted = styled.p`
  margin: 0;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
`;

export const HandleTasks = () => {
  const dispatch = useDispatch();

  const allTasks = useSelector((store) => store.todos.tasks);

  const displayLenght = () => {
    return allTasks.filter((item) => item.complete).length;
  };

  return (
    <Container>
      <ButtonContainer>
        <Button
          type="button"
          onClick={() => {
            dispatch(todos.actions.completeAllTasks());
          }}
        >
          Complete all
        </Button>
        <Button
          type="button"
          onClick={() => {
            dispatch(todos.actions.removeAllTasks());
          }}
        >
          Remove all
        </Button>
      </ButtonContainer>
      <NumberOfTasksCompleted>
        {displayLenght()}/{allTasks.length} completed
      </NumberOfTasksCompleted>
    </Container>
  );
};
