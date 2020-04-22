import React from 'react'
import { useDispatch } from "react-redux"
import styled from 'styled-components'
import { todo } from "../reducers/todo"

const A = styled.a`
  cursor: pointer;
`

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
      <A onClick={onRemoveClicked}>🧨</A>
    </section>
  )
}