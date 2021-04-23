import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import styled from "styled-components";

import { todos } from "./Reducers/todos";
import { TodoList } from "./Components/TaskList/TodoList";
import { CreateNewTask } from "./Components/AddTask/CreateNewTask";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";

export const App = () => {
  const reducer = combineReducers({
    todos: todos.reducer,
  });

  const store = configureStore({ reducer });

  return (
    <Provider store={store}>
         <Wrapper>
        <Header />
       <WrapperInner>
        <CreateNewTask />
        <TodoList />
        </WrapperInner>
      <Footer />
      </Wrapper>
    </Provider>
  );
};

const Wrapper = styled.div`
display: flex;
flex-direction:column;
align-items: center;
min-height: calc(100vh - 200px);
padding-top: 150px;
padding-bottom: 50px;
position: relative;

@media (min-width: 768px) {
  min-height: calc(100vh - 300px);
  padding-top: 250px;
}
`;

const WrapperInner = styled.div`
flex: 1 1 auto;
width: calc(100% - 10px);
padding: 0 5px;
display: flex;
flex-direction: column;
align-items: center;
`
