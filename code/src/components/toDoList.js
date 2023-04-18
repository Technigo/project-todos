import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { tasks } from 'reducers/todos';
// import { NewToDo } from './newToDo';
import TodoItem from './TodoItem';

export const ToDoLists = () => {
  const dispatch = useDispatch();

  // gets the tasks fron the store
  const taskList = useSelector((store) => store.tasks.items);

  // fuction to set checkbox as complete or not, from todo reducer
  const onDone = (id) => {
    dispatch(tasks.actions.toggleItem(id))
  }

  const onDelete = (todoIndex) => {
    dispatch(tasks.actions.deleteItem(todoIndex))
  }

  const todosTodo = taskList.filter((todo) => !todo.isDone)
  const doneTodos = taskList.filter((todo) => todo.isDone)

  return (
    <>
      <h2>To-do ({todosTodo.length})</h2>

      {todosTodo.length === 0 && (
        <p>You are all DONE! *high five*</p>
      )}

      {todosTodo.map((todo, index) => (<TodoItem
        todo={todo}
        index={index}
        key={todo.id}
        onDelete={onDelete}
        onDone={onDone} />))}

      <h2>Done ({doneTodos.length})</h2>

      {doneTodos.map((todo, index) => (<TodoItem
        todo={todo}
        index={index}
        key={todo.id}
        onDelete={onDelete}
        onDone={onDone} />))}
    </>
  )
}
