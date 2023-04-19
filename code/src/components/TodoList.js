/* eslint-disable linebreak-style */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todos } from 'reducers/todos';
import styled from 'styled-components';

const ListItem = styled.div`
font-size: 20px;
border: 1px solid black;
padding: 15px 5px 15px 5px;
background-color: white;
display: grid;
grid-template-columns: 1fr 7fr 1fr;
align-items: center;
`

const Counter = styled.p`
margin: 10px;
align-self: flex-end; `

export const TodoList = () => {
  const todoList = useSelector((store) => store.todos.items);
  const dispatch = useDispatch();
  const amountOfTasks = useSelector((store) => store.todos.items);
  const amountOfCompleted = amountOfTasks.filter((task) => task.isDone)
  return (
    <>
      <ul>
        {todoList.map((singleTodo) => {
          return (
            <ListItem>
              <input
                onChange={() => dispatch(todos.actions.completeTodo(singleTodo.id))}
                type="checkbox"
                key="input-field"
                checked={singleTodo.isDone} />
              <li key={singleTodo.id}>{singleTodo.task}</li>
              <button
                onClick={() => dispatch(todos.actions.removeTodo(singleTodo))}
                type="button"
                key="remove-button">➖
              </button>
            </ListItem>)
        })}
      </ul>
      <Counter>{amountOfCompleted.length} / {amountOfTasks.length} completed</Counter>
    </>
  )
}