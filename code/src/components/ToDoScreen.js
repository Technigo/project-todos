import React from "react";
import { TaskList } from './TaskList.js';

export const ToDoScreen = () => {

  return (
    <section className="todoscreen">
      {/*<h6>REMEMBER TO</h6>*/}
      <h3>TODO</h3>
      <TaskList />
    </section>
  )
}