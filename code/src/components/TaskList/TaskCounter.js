import React from "react";
import { useSelector } from "react-redux";

import { CounterContainer, CounterText } from "../../styledcomponents/StyledTaskList";


export const TaskCounter = () => {
  const tasks = useSelector((state) => state.todos.tasks);
  
  const onCountCompleted = () => {
    const completedTasks = tasks.filter(task => task.isComplete === true);
    return completedTasks.length;
  };

  return (
    <CounterContainer>
      <CounterText>Completed: {onCountCompleted()} / {tasks.length}</CounterText>
    </CounterContainer>
  )
};