import React from "react";
import { useSelector } from "react-redux";

import "./TodoListStyle.css";
import { Task } from "./Task";
import { RoundedButton } from "./RoundedButton";
import { DeadlineCountdown } from "./DeadlineCountdown";

import {todos} from '../Reducers/todos'

export const TodoList = () => {
  const tasks = useSelector((store) => store.todos.items);

  return (
    <section className="todo-list">
      {tasks.map((task) => (
        <div key={task.id} className="todo-list-item">
          <p> {task.createdAt}</p>
          <div className="todo-list-item__inner">
            <Task {...task} />
          </div>
          <div className="todo-list-item__inner-deadline">
            <p>
              {task.deadline === ""
                ? "No deadline"
                : `Deadline: ${task.deadline}`}
            </p>
            <DeadlineCountdown deadline={task.deadline} />
          </div>
          <div className="todo-list-item__inner-button-container">
            <RoundedButton buttonText="Delete" action={todos.actions.removeTodo({task: task.id})}/>
          </div>
        </div>
      ))}
    </section>
  );
};
