import React from 'react'
import { useDispatch } from 'react-redux'
import Checkbox from 'react-custom-checkbox'
import * as Icon from 'react-icons/fi'

import todos from '../reducers/todos'


export const TodoItem = ({todo}) => {
  const dispatch = useDispatch()

  return (
    <div className= {todo.isComplete ? "done todo-container" : "not-done todo-container"}>
      <div className="task-container"> 
        <p>{todo.description}</p>
        <div className="buttons">
          <Checkbox 
            size={15}
            borderColor="rgb(66,67,69, 0.4)"
            style={{ cursor: "pointer" }}
            checked={todo.isComplete}
            onChange={() => dispatch(todos.actions.toggleComplete(todo.id))}
            icon={<div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "light-grey",
                alignSelf: "stretch",
              }}
            >
              <Icon.FiCheck color="grey" size={15} />
            </div>}
          /> 
          <button 
            className="delete-button"
            onClick={() => dispatch(todos.actions.deleteItem(todo.id))}
          >
            <span role="img" aria-label="bin-emoji">🗑️</span>
          </button>
        </div>
      </div>
      <div className="date-container">
        <p>Added {todo.createdAt}</p>
      </div>
    </div>
  )
}