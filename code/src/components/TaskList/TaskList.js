import React, { useState } from "react";
import { useSelector } from "react-redux";

import { ClearButtons } from "./ClearButtons";
import { NoTasksFound } from "../Main/NoTasksFound";
import { TaskCard } from "../TaskCard.js/TaskCard";
import { TaskCounter } from "./TaskCounter";
import { FilterTasks } from "./FilterTasks";
import { Main, TaskListContainer, BottomContainer } from "../../styledcomponents/StyledTaskList";

export const TaskList = () => {
  const [category, setCategory] = useState("");
  const allTasks = useSelector((state) => state.todos.tasks);
  const tasks = useSelector((state) => {
    if (!category) return state.todos.tasks;
    else if (category === "all") return state.todos.tasks
    else return state.todos.tasks.filter((task) => task.category === category); 
  });

  return (
    <Main>
      {allTasks.length < 1 ? (
        <NoTasksFound />
      )
      :
      (
        <TaskListContainer>
          <FilterTasks 
            category={category.value} 
            onChange={category => setCategory(category.value)} />
          {tasks.map((todo, index) => (
            <TaskCard 
              key={index}
              taskInfo={todo} 
            />   
          ))}
          <BottomContainer>
            <TaskCounter />
            <ClearButtons />
          </BottomContainer>
        </TaskListContainer>
      )}
    </Main>
  )
};