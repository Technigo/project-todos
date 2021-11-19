import React from "react";

import Header from "components/Header";
import Counter from "components/Counter";
import AddTask from "components/AddTask";
import ToDoList from "components/ToDoList";
import styled from "styled-components";

const Wrapper = () => {
  return (
    <WrapperContainer>
      <Header />
      <Counter />
      <AddTask />
      <ToDoList />
    </WrapperContainer>
  );
};

export default Wrapper;

const WrapperContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
