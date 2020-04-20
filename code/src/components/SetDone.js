import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { todo } from "../reducers/todo"

export const SetDone = ({itemIndex}) => {

  const dispatch = useDispatch()

  const onDoneClicked = (e) => {
    dispatch(
      todo.actions.doneTodo({
        itemIndex,
        done: true,
      })
    )
  }

  

  return (
    <section>
      <a onClick={onDoneClicked}>
        [Done]
      </a>
    </section>
  )
}