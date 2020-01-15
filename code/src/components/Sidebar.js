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
      <P>Show todos: </P>
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
const Button = styled.button`
  margin-bottom: 2rem;
  margin-right: 1rem;
  width: 20%;
  padding: 0.5rem;
  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 0;
    padding: 1rem 0;
    width: 100%;
  }
`;
const P = styled.p`
  font-weight: bold;
  margin-bottom: 0.5rem;
  margin-top: 1rem;
  @media (min-width: 768px) {
    margin-bottom: 2rem;
    margin-top: 0;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    flex-direction: column;
  }
`;
