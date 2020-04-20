import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { todo } from "../reducers/todo"

export const DeleteItem = ({itemIndex}) => {

  const dispatch = useDispatch()

  const onRemoveClicked = (e) => {
    dispatch(
      todo.actions.removeTodo({
        itemIndex,
      })
    )
  }

  return (
    <section>
      <a onClick={onRemoveClicked}>
        [Delete]
      </a>
    </section>
  )
}