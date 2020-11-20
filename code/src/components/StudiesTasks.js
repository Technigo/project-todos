import React from 'react';
import { useSelector } from 'react-redux';

export const StudiesTasks = () => {
  const todoList = useSelector((store) => store.todolist);
  const onlyStudyTasks = todoList.filter((item) => item.category === "Studies");

  //console.log(onlyStudyTasks);

  return (
    <>
      <h1>Study related Tasks</h1>
      {onlyStudyTasks.map((item) => (
        <p key={item.id}>{item.text}</p>
      ))}
    </>
  )
};
