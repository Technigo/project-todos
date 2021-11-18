import React from "react"
import { useDispatch, useSelector } from "react-redux"
import DayJS from "react-dayjs"
import styled from "styled-components"

import todos from "../reducers/todos"

const CheckboxStyled = styled.input`
  position: relative;
  appearance: none;
  height: 24px;
  width: 24px;
  margin-right: 10px;
  background: #fff;
  transition: 0.1s;
  flex-shrink: 0;
  cursor: pointer;
  box-shadow: inset 1px 1px 2px var(--grey);

  &::after {
    content: "";
    position: absolute;
    top: 5px;
    left: 4px;
    height: 17px;
    transition: 0.1s;
    width: 17px;
    background-image: url(../check.svg);
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0;
    border: var(--grey);
  }

  &:checked {
    background: #fff;
    box-shadow: inset 1px 1px 2px var(--grey);
    &::after {
      opacity: 1;
    }
  }

  &:focus,
  :active {
    outline: none;
  }
`

const TodoList = () => {
  const dispatch = useDispatch()
  const items = useSelector(store => store.todos.items)

  const onToggleTodo = id => {
    dispatch(todos.actions.toggleTodo(id))
  }

  const onDeleteTodoImmutability = id => {
    dispatch(todos.actions.deleteTodo(id))
    console.log("onDeleteTodoTim")
  }

  const filteredIsComplete = items.filter(item => item.isComplete)
  console.log("isCompleteItem", filteredIsComplete)

  return (
    <section className="list-container">
      <p>Your todos</p>
      {items.map((item, index) => (
        <>
          <div
            className={
              item.isComplete ? "item-container-checked" : "item-container"
            }
            key={item.id}
          >
            <CheckboxStyled
              // className="checkbox"
              type="checkbox"
              checked={item.isComplete}
              onChange={() => onToggleTodo(item.id)}
            ></CheckboxStyled>
            <div className="list-input-text">
              <p className="todo-text">{item.text}</p>

              <p className="date">
                Created at -<DayJS element="span" format="MMM D, YYYY H:mm" />
              </p>
            </div>

            <button
              className="delete-btn"
              onClick={() => onDeleteTodoImmutability(item.id)}
            >
              &otimes;
            </button>
          </div>
        </>
      ))}
      <div>
        <p>Completed todos</p>
        {filteredIsComplete.map(isCompleteItem => (
          <>
            <div className={"item-checked"} key={isCompleteItem.id}>
              <CheckboxStyled
                className="checkbox"
                type="checkbox"
                checked={isCompleteItem.isComplete}
                onChange={() => onToggleTodo(isCompleteItem.id)}
              ></CheckboxStyled>
              <div className="list-input-text">
                <p className="todo-text">{isCompleteItem.text}</p>

                <p className="date">
                  Created at -<DayJS element="span" format="MMM D, YYYY H:mm" />
                </p>
              </div>

              <button
                className="delete-btn"
                onClick={() => onDeleteTodoImmutability(isCompleteItem.id)}
              >
                &otimes;
              </button>
            </div>
          </>
        ))}
      </div>
    </section>
  )
}

export default TodoList
