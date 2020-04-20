import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { reducer } from "../reducers/reducer"

export const SetDone = ({itemIndex}) => {
  const item = useSelector((store) => store.reducer.todoListItems[itemIndex])

  const dispatch = useDispatch()

  const onDoneClicked = (e) => {
    dispatch(
      reducer.actions.doneTodo({
        itemIndex,
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