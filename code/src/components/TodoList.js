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

const Checkbox = styled.input`
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  margin: 0;
  font: inherit;
  color: currentColor;
  width: 1.15em;
  height: 1.15em;
  border: 0.15em solid currentColor;
  border-radius: 0.15em;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;
  ::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em #000;
    background-color: CanvasText; /* WHCM */
    transform-origin: bottom left;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  };
  :checked::before {
    transform: scale(1);
  };
  :focus {
    outline: max(2px, 0.15em) solid currentColor;
    outline-offset: max(2px, 0.15em);
  }
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
                <Checkbox
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