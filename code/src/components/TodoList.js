import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import moment from 'moment'

import { CheckboxStyled } from 'styling/checkbox'
import Svg from 'svg'

import todos from '../reducers/todos'

const TodoList = () => {
  const todoItems = useSelector((store) => store.todos.items)
  const todoCompleted = todoItems.filter((item) => item.isComplete)
  const todoNotCompleted = todoItems.filter((item) => !item.isComplete)

  const dispatch = useDispatch()

  const onToggleTodo = (id) => {
    dispatch(todos.actions.toggleTodo(id))
  }

  const onDeleteTodo = (id) => {
    dispatch(todos.actions.deleteTodo(id))
  }

  return (
    <section className="list-container">
      {todoItems.length === 0 ? (
        <div className="img-no-todo-container">
          <p>Want to add one?</p>
          <Svg />
        </div>
      ) : (
        <>
          {/* todos that are not completed */}
          <p className="label">To do</p>
          {todoNotCompleted.map((item, index) => (
            <div
              key={item.id}
              style={{
                backgroundImage: `linear-gradient(72deg, var(--background), ${item.color[index]})`,
              }}
              className="item-container"
            >
              <CheckboxStyled
                type="checkbox"
                checked={item.isComplete}
                onChange={() => onToggleTodo(item.id)}
              ></CheckboxStyled>
              <div className="list-input-text">
                <p className="todo-text">{item.text}</p>

                <p className="date">Created {moment(item.time).fromNow()}</p>
              </div>

              <button
                className="delete-btn"
                onClick={() => onDeleteTodo(item.id)}
              >
                <img className="img-bin" src="./bin.svg" alt="delete bin"></img>
              </button>
            </div>
          ))}

          {/* todos that ARE completed */}
          <div>
            <p className="label">Completed to dos</p>
            {todoCompleted.map((isCompleteItem, index) => (
              <div
                key={isCompleteItem.id}
                style={{
                  backgroundImage: `linear-gradient(72deg, var(--background), ${isCompleteItem.color[index]})`,
                }}
                className="item-checked"
              >
                <CheckboxStyled
                  type="checkbox"
                  checked={isCompleteItem.isComplete}
                  onChange={() => onToggleTodo(isCompleteItem.id)}
                ></CheckboxStyled>
                <div className="list-input-text">
                  <p className="todo-text">{isCompleteItem.text}</p>

                  <p className="date">
                    Created at{' '}
                    {moment(isCompleteItem.time).format('MMMM Do YYYY, H:mm')}
                  </p>
                </div>

                <button
                  className="delete-btn"
                  onClick={() => onDeleteTodo(isCompleteItem.id)}
                >
                  <img
                    className="img-bin"
                    src="./bin.svg"
                    alt="delete bin"
                  ></img>
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  )
}

export default TodoList
