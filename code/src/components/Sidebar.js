import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { tasks } from "reducers/tasks";

export const Sidebar = () => {
  const dispatch = useDispatch();
  const handleAll = () => {};
  const handleCompleted = () => {
    dispatch(tasks.actions.showCompleted());
  };
  const handleNotCompleted = () => {
    dispatch(tasks.actions.showNotCompleted());
  };
  return (
    <Main>
      <p>Show todos: </p>
      <Container>
        <Button type="button" onClick={handleAll}>
          <p>All</p>
        </Button>
        <Button type="button" onClick={handleCompleted}>
          <p>Completed</p>
        </Button>
        <Button type="button" onClick={handleNotCompleted}>
          <p>To be done</p>
        </Button>
      </Container>
    </Main>
  );
};

const Main = styled.div`
  text-align: center;
  @media (min-width: 768px) {
    margin-top: 3rem;
  }
`;
const Button = styled.button``;
const Container = styled.div`
  display: flex;
  @media (min-width: 768px) {
    flex-direction: column;
  }
`;
