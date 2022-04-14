import React from "react";
import Header from "./component/Header";
import NewForm from "./component/NewForm";

export const App = () => {
  return (
    <div className="todo-container container-center-column">
      <Header />
      <NewForm />
    </div>
  );
};
