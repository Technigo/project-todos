/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components/macro';
import { useDispatch, useSelector } from 'react-redux';
import { todos } from 'reducers/todos';

// illustration
import illustration3 from 'assets/images/Shopping call_DrawKit_Vector_Illustrations copy.png';

// components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { Divider } from './AddTodo';
import { Illustration } from './Header';

// Icon

const TaskList = styled.ul`
margin: 2em 0;
padding: 0;
`
const ListItem = styled.article`
display: flex;
justify-content: space-between;
margin-bottom: 1em;
align-items: center;
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
    box-shadow: inset 1em 1em var(--color);
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

const FormControl = styled.label`
    font-size: 21px;
    font-size: max(21px, 1em);
    font-family: inherit;
    line-height: 1.1;
    display: grid;
    grid-template-columns: 2em auto;
    max-width: 80%;
    line-break: strict;
    `

const IconButton = styled.button`
        border: none;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background-color: var(--btn-color);
        color: #fff;
        box-shadow: 0 3px 5px rgba(0, 0, 0, 0.18);
        text-align: center;
        line-height: 1.1;
        transition: 220ms all ease-in-out;
        width: 2rem;
        height: 2rem;
        padding: 0.35em;
        border-radius: 50%;
        margin-left: 1rem;
        &:hover, &:active {
            transform: scale(1.1);
        };
        &:focus {
            outline-style: solid;
            outline-color: transparent;
            box-shadow: 0 0 0 4px var(--btn-border);
        };
        &:not(.icon-button) {
            padding: 0.25em 0.75em;
            min-width: 10ch;
            min-height: 44px;
            border-radius: 8px;
        };
        &:disabled {
            background-color: var(--btn-disabled);
        };
    `

const Counter = styled.p`
font-size: 21px;`

const NoTasksYet = styled.section`
display: flex;
flex-direction: column;
align-items: center;
`

const TodoList = () => {
  const todoList = useSelector((store) => store.todos.items);
  const dispatch = useDispatch();
  const allTasks = useSelector((store) => store.todos.items);
  const completedTasks = allTasks.filter((task) => task.isDone);
  return (
    <>
      <TaskList>
        {todoList.length === 0 && (
          <NoTasksYet>
            <p>No tasks here yet. Try adding one above!</p>
            <Illustration src={illustration3} />
          </NoTasksYet>
        )}
        {todoList.map((singleTodo) => {
          return (
            <ListItem key={singleTodo.id}>
              <FormControl htmlFor={singleTodo.id}>
                <Checkbox
                  onChange={() => dispatch(todos.actions.completeTodo(singleTodo.id))}
                  name="completeTask"
                  type="checkbox"
                  id={singleTodo.id}
                  checked={singleTodo.isDone} />
                <span
                  style={{
                    textDecoration: singleTodo.isDone ? 'line-through' : 'none',
                    flex: 1 // Ensure the text takes the available space
                  }}>
                  {singleTodo.task}
                </span>
              </FormControl>
              <IconButton
                className="icon-button"
                onClick={() => dispatch(todos.actions.removeTodo(singleTodo))}
                type="button"
                aria-label="deleteTask"
                name="deleteTask">
                <FontAwesomeIcon icon={faMinus} />
              </IconButton>
            </ListItem>)
        })}
      </TaskList>
      <Divider />
      <Counter name="Counter">{completedTasks.length} / {allTasks.length} completed</Counter>
    </>
  )
};

export default TodoList;