import React from "react";
import { useSelector } from "react-redux";

import Header from "components/Header";
import Counter from "components/Counter";
import AddTask from "components/AddTask";
import ToDoList from "components/ToDoList";
import Filter from "components/Filter";
import NoTasks from "components/NoTasks";
import styled from "styled-components";

import { selectFilteredTodos } from "../reducers/tasks";

const Wrapper = () => {
  const items = useSelector((store) => selectFilteredTodos(store));

  return (
    <Container>
      <WrapperContainer>
        <Header />
        <Counter />
        <AddTask />
        <Filter />
        {items.length < 1 && <NoTasks />}
        {items.length > 0 && <ToDoList />}
      </WrapperContainer>
    </Container>
  );
};

export default Wrapper;

const Container = styled.section`
  display: flex;
  justify-content: center;
`;

const WrapperContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1025px) {
    width: 40%;
    margin-top: 70px;
    padding-bottom: 30px;
    border: 1px solid #2f8c85;
    background-color: #d7f0ed;
  }
`;
