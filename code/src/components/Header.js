import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const tasks = useSelector((store) => store.tasks.items);
  const numberOfTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.isComplete).length;

  return (
    <div className='header'>
      <h1>To do</h1>
      <div className='date-number-of-tasks-container'>
        <p>
          {new Date().toLocaleDateString("en-us", {
            month: "long",
            day: "numeric",
          })}
        </p>
        <div className='tasks-clear-button-container'>
          <p>
            {completedTasks} / {numberOfTasks} tasks completed
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
