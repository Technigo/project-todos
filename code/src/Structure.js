import React from "react";

import { AddTodo } from "./components/AddTodo";
import { Header } from "./components/styled/Header";
import { Footer } from "./components/styled/Footer";
import { InfoBoard } from "components/InfoBoard";
import { NavBoard } from "components/NavBoard";
import { AllTodoList } from "components/AllTodoList";

export const Structure = () => {
  return (
    <main>
      <Header height={60} width={100} />
      <div className="main-grid">
        <div className="grid">
          <h1>todos</h1>
          <AddTodo />
          <NavBoard />
          <AllTodoList />
          <InfoBoard />
        </div>
      </div>
      <Footer height={50} width={100}>
        <p>
          created and developed by &#8203;
          <a className="link" href="https://mary-snopok.com" target="_blank" rel="noopener noreferrer">
            @marysnopok
          </a>
        </p>
      </Footer>
    </main>
  );
};
