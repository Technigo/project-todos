import React from "react";
import { useSelector } from "react-redux";

import "./HeaderStyle.css";
import { RoundedButton } from "./RoundedButton";

export const Header = () => {
  const tasks = useSelector((store) => store.todos.items);
  const today = new Date().toLocaleString("default", {
    month: "long",
    day: "2-digit",
  });
  const completedTasks = tasks.filter((task) => task.isComplete);

  return (
    <header>
      <div className="header-overlay"></div>
      <div className="header-col">
        <h1>Todos</h1>
        <h2>{today}</h2>
      </div>
      <div className="header-col">
        <p>
          {completedTasks.length} / {tasks.length} tasks completed
        </p>
        <RoundedButton type={"CompleteAll"} id={""} />
      </div>
    </header>
  );
};
