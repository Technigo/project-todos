import React from 'react'
import { useSelector } from 'react-redux';
// import styled from 'styled-components';

const TodoCounter = () => {
  const taskList = useSelector((store) => store.tasks.tasksArray);
  const leftTodos = taskList.filter((task) => task.isCompleted === false)
  if (leftTodos.length > 0) {
    return (
      <section className="counter-wrapper">
        <p>{leftTodos.length} to-dos left! </p>
      </section>
    );
  } else if (leftTodos.length === 0) {
    return (
      <section className="counter-wrapper">
          No more to-dos! Take a break oradd some new!
      </section>
    )
  }
};
export default TodoCounter;

