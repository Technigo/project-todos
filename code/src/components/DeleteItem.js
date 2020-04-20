import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { reducer } from "../reducers/reducer"

export const DeleteItem = ({itemIndex}) => {
  const item = useSelector((store) => store.reducer.todoListItems[itemIndex])

  const dispatch = useDispatch()

  const onRemoveClicked = (e) => {
    dispatch(
      reducer.actions.removeTodo({
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