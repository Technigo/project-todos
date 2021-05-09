import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import tasks from "./reducers/tasks";
import TodoList from "./components/ToDoList";
import AddTask from "components/AddTask";
import Header from "components/Header";
import Footer from "components/Footer";

const App = () => {
  const reducer = combineReducers({
    tasks: tasks.reducer,
  });

  const store = configureStore({ reducer });

  return (
    <Provider store={store}>
      <div className='wrapper'>
        <img src={require("./images/border-top.png")} alt='floral-border' />
        <Header />
        <div className='list-wrapper'>
          <AddTask />
          <TodoList />
        </div>
        <Footer />
        <img src={require("./images/border-bottom.png")} alt='floral-border' />
      </div>
    </Provider>
  );
};

export default App;
