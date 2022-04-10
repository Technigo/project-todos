import React from 'react'
import { useDispatch } from 'react-redux'
// import { useSelector } from 'react-redux'
import styled from "styled-components/macro"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCircle } from '@fortawesome/free-solid-svg-icons'
// import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
// import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
// import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
// import { faEraser } from '@fortawesome/free-solid-svg-icons'

import { todos } from 'reducers/todos'

const DeleteButton = styled.button`
  display: inline-block;
  border: none;
  padding: 0;
  background: transparent;
  color: #000;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  margin-left: 0.5rem;
`

export const Todo = ({ todo, id }) => {
  const dispatch = useDispatch()

  // const isChecked = () => {
  //   if (todo.completed) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }

  const isDone = () => {
    if (todo.completed) {
      return { opacity: "0.5" }
      // return { textDecoration: "line-through", opacity: "0.5" }
    } else {
      return { opacity: "1" }
      // return { textDecoration: "none", opacity: "1" }
    }
  }

  const onCheck = () => {
    if (todo.completed) {
      return <FontAwesomeIcon icon={faCircleCheck} />
    } else {
      return <FontAwesomeIcon icon={faCircle} />
    }
  }

  const onDeleteTodo = () => {
    dispatch(todos.actions.deleteTodo(id))
  }

  const onCompletedChange = () => {
    dispatch(todos.actions.toggleTodo(id))
  }

  return (
    <div>
      <label className="custom-checkbox" style={isDone()} onChange={onCompletedChange}>
        <input type="checkbox" />
        {onCheck()}
        <span>{todo.text}</span>
      </label>
      <DeleteButton type="button" onClick={onDeleteTodo}><FontAwesomeIcon icon={faTrashCan} /></DeleteButton>
    </div>
  )
}
