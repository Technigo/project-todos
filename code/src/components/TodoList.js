import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
import todos from '../reducers/todos'
import styled from 'styled-components'

const TaskList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  height: auto;
  backdrop-filter: blur(12px);
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.06);
  background-color: #ffffff10;
  border-left: #45c3e9 3px solid;
  padding: 5px 3px;
  margin: 0 auto;
  margin-bottom: 10px;

  .task-with-checkbox {
    display: flex;
  }
  
  .text-and-date-box {
    display: flex;
    flex-direction: column;
  }
  
  .date-paragraph {
    font-size: 14px;
  }

  .delete-btn {
    background-color: transparent;
    border: none;
    color: rgb(184, 54, 54);
    font-size: 16px;
    cursor: pointer;
    margin-right: 2%;
  }

  .checkbox {
    -webkit-appearance: none;
    border: 1px solid black;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
      inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
    padding: 9px;
    padding-bottom: 0;
    margin-right: 10px;
    border-radius: 50px;
    width: 20px;
    height: 20px;
    display: inline-block;
    position: relative;
  }

  .checkbox:active,
  .checkbox:checked:active {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
    inset 0px 1px 3px rgba(0, 0, 0, 0.1);
  }

  .checkbox:checked {
    border: none;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
      inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05),
      inset 15px 10px -12px rgba(255, 255, 255, 0.1);
    background-color: #FFD580;
  }
`
const TaskParagraph = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  color: ${props => props.isComplete ? "grey" : "black"};
  text-decoration: ${props => props.isComplete ? "line-through" : "none"};
  margin:0;
`
const TodoList = () => {
  const items = useSelector((store) => store.todos.items) //Reaching for the todos via selector

  const dispatch = useDispatch() //This hook returns a reference to the dispatch function from the Redux store. It's used to dispatch actions as needed.

  const onToggleTodo = (id) => {
    dispatch(todos.actions.toggleTodo(id))
  }

  const onDeleteTodo = (id) => {
    dispatch(todos.actions.deleteTodo(id))
  }

  return (
    <>
      {items.map((item) => (
        <TaskList key={item.id}>
          <div className="task-with-checkbox">
            <input
              className="checkbox"
              type="checkbox"
              checked={item.isComplete}
              onChange={() => onToggleTodo(item.id)}
            />
            <div className="text-and-date-box">
              <TaskParagraph isComplete={item.isComplete}>{item.text}</TaskParagraph>
              <p className="date-paragraph">Added {moment().format("MMM Do hh:mm")}</p>
            </div>
          </div>
          <button className="delete-btn" onClick={() => onDeleteTodo(item.id)}>
          <i className="fas fa-minus-circle"></i>
          </button>
        </TaskList>
      ))}
    </>
  )
}

export default TodoList
