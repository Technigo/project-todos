import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { apa } from "../reducers/apa"

export const SetDone = ({itemIndex}) => {

  const dispatch = useDispatch()

  const onDoneClicked = (e) => {
    dispatch(
      apa.actions.doneTodo({
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