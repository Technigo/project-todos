import React from "react"
import { useDispatch, useSelector } from "react-redux"

import moment from "moment"

import { CheckboxStyled } from "styling/checkbox"
import Svg from "svg"

import todos from "../reducers/todos"

const TodoList = () => {
  
  const items = useSelector(store => store.todos.items)
  const todoCompleted = items.filter(item => item.isComplete)
  const todoNotCompleted = items.filter(item => !item.isComplete)
  console.log("todoCompleted",todoCompleted)
  console.log("todoNotCompleted",todoNotCompleted)


  const dispatch = useDispatch()

  const onToggleTodo = id => {
    dispatch(todos.actions.toggleTodo(id))
  }

  const onDeleteTodoImmutability = id => {
    dispatch(todos.actions.deleteTodo(id))
  }



  return (
    <section className="list-container">
      {items.length === 0 ? (
        <div className="img-no-todo-container">
          <p>Want to add one?</p>
          <Svg />
        </div>
      ) : (
        <>
        {/* Mapping over todos that are not completed */}
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

                  <p className="date">
                    Created {moment(item.time).fromNow()}
                  </p>
                </div>

                <button
                  className="delete-btn"
                  onClick={() => onDeleteTodoImmutability(item.id)}
                >
                  <img
                    className="img-bin"
                    src="./bin.svg"
                    alt="delete bin"
                  ></img>
                </button>
              </div>
            
          ))}
          <div>
            <p className="label">Completed to dos</p>
            {todoCompleted.map((isCompleteItem, index) => (
                <div
                  style={{
                    backgroundImage: `linear-gradient(72deg, var(--background), ${isCompleteItem.color[index]})`,
                  }}
                  className={"item-checked"}
                  key={isCompleteItem.id}
                  
                >
                  <CheckboxStyled
                    type="checkbox"
                    checked={isCompleteItem.isComplete}
                    onChange={() => onToggleTodo(isCompleteItem.id)}
                  ></CheckboxStyled>
                  <div className="list-input-text">
                    <p className="todo-text">{isCompleteItem.text}</p>

                    <p className="date">
                      Created at{" "}
                      {moment(isCompleteItem.time).format("MMMM Do YYYY, H:mm")}
                    </p>
                  </div>

                  <button
                    className="delete-btn"
                    onClick={() => onDeleteTodoImmutability(isCompleteItem.id)}
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
