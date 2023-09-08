/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components/macro';
import { useDispatch, useSelector } from 'react-redux';
import { todos } from 'reducers/todos';

const TaskList = styled.ul`
margin: 0;
padding: 0;
border: 2px solid #000;
`
const ListItem = styled.article`
border: 2px solid red;
`

const TodoList = () => {
  const todoList = useSelector((store) => store.todos.items);
  const dispatch = useDispatch();
  const amountOfTasks = useSelector((store) => store.todos.items);
  const amountOfCompleted = amountOfTasks.filter((task) => task.isDone)
  return (
    <>
      <TaskList>
        {todoList.map((singleTodo) => {
          return (
            <ListItem key={singleTodo.id}>
              <label htmlFor={singleTodo.id}>
                <input
                  onChange={() => dispatch(todos.actions.completeTodo(singleTodo.id))}
                  name="newTodo"
                  type="checkbox"
                  id={singleTodo.id}
                  checked={singleTodo.isDone} />{singleTodo.task}
              </label>
              <button
                onClick={() => dispatch(todos.actions.removeTodo(singleTodo))}
                type="button"
                key="remove-button">➖
              </button>
            </ListItem>)
        })}
      </TaskList>
      <p className="counter">{amountOfCompleted.length} / {amountOfTasks.length} completed</p>
    </>
  )
};

export default TodoList;