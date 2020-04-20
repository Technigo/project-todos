import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { apa } from "../reducers/apa"

export const DeleteItem = ({itemIndex}) => {

  const dispatch = useDispatch()

  const onRemoveClicked = (e) => {
    dispatch(
      apa.actions.removeTodo({
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