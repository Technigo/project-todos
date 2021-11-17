import React from "react";

import { AddTodo } from "./components/AddTodo";
import { Header } from "./components/styled/Header";
import { Footer } from "./components/styled/Footer";
import { InfoBoard } from "components/InfoBoard";
import { NavBoard } from "components/NavBoard";
import { AllTodoList } from "components/AllTodoList";

export const Structure = () => {
  return (
    <div className="main-grid">
      <Header height={30} width={100} color={"transparent"} />

      <div className="grid">
        <h1>todos</h1>
        <AddTodo />
        <NavBoard />
        <AllTodoList />
        <InfoBoard />
      </div>
      <Footer height={40} width={100} color={"transparent"}>
        <p>
          Created and Developed by &#8203;
          <a className="link" href="https://mary-snopok.com" target="_blank" rel="noopener noreferrer">
            Mary Snopok
          </a>
        </p>
      </Footer>
    </div>
  );
};
