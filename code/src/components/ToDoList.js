import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import uniqid from 'uniqid';
import { tasks } from 'reducers/tasks';
import { newTask } from 'reducers/newTask';

export const ToDoList = () => {
  const allTasks = useSelector((store) => store.tasks);
  const allNewTasks = useSelector((store) => store.newTask.items);
  const dispatch = useDispatch();

  const onToDoDelete = (index) => {
    dispatch(tasks.actions.deleteItem(index));
    dispatch(newTask.actions.deleteItem(index));
  };

  return (
    <>
      {allTasks.map((todoItem, todoIndex) => (
        <div key={uniqid()}>
          <p>{todoItem.text}</p>
          <button
            type="button"
            onClick={() => onToDoDelete(todoIndex)}>
            <span role="img" aria-label="delete">
              Delete
            </span>
          </button>
        </div>
      ))}
      {allNewTasks.map((newTodoItem, todoIndex) => (
        <div key={uniqid()}>
          <p>{newTodoItem.task}</p>
          <button
            type="button"
            onClick={() => onToDoDelete(todoIndex)}>
            <span role="img" aria-label="delete">
              Delete
            </span>
          </button>
        </div>
      ))}
    </>
  )
}