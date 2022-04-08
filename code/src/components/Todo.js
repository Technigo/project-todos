import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCircle } from '@fortawesome/free-solid-svg-icons'
// import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
// import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
// import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
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

export const Todo = ({ todo }) => {
  const dispatch = useDispatch()
  console.log(todo.completed)

  const allTodos = useSelector((store) => store.todos.items)
  console.log(allTodos)

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

  // const onDeleteTodo = () => {

  // }

  const onCompletedChange = () => {
    console.log('onCompletedChange is semi working')
    dispatch(todos.actions.toggleTodo(todo))
  }

  // const onClickChange = () => {
  //   dispatch(todos.actions.toggleTodo(todo))
  // }

  return (
    <div>
      <label className="custom-checkbox" style={isDone()} onChange={onCompletedChange}>
        <input type="checkbox" />
        {onCheck()}
        <span>{todo.text}</span>
      </label>
      {/* <DeleteButton type="button" onClick={() => dispatch(todos.actions.deleteTodo(todo))}><FontAwesomeIcon icon={faCircleXmark} /></DeleteButton> */}
      <DeleteButton type="button" onClick={() => dispatch(todos.actions.deleteTodo(todo))}><FontAwesomeIcon icon={faTrashCan} /></DeleteButton>
      {/* <DeleteButton type="button" onClick={() => dispatch(todos.actions.deleteTodo(todo))}><FontAwesomeIcon icon={faEraser} /></DeleteButton> */}
    </div>
  )
}

// const CustomCheckboxLabel = styled.label`

// & input[type="checkbox"] {
//   display: none;
// }

// & input[type="checkbox"]:checked {
//   display: inline-block;
// }

// `

// const UncheckedIcon = styled.span`
// color: blue;
// `