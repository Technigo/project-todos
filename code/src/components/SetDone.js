import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import styled from 'styled-components'
import { todo } from "../reducers/todo"

const A = styled.a`
  cursor: pointer;
`

export const SetDone = ({itemIndex}) => {
  const [updateDone, SetupdateDone] = useState(true)
  const dispatch = useDispatch()

  const onDoneClicked = (e) => {
    SetupdateDone(!updateDone)

    dispatch(
      todo.actions.doneTodo({
        itemIndex,
        done: updateDone,
      })
    )
  }

  return (
    <section>
      <A onClick={onDoneClicked}>
        {updateDone ? "✔️" : "❌"}
      </A>
    </section>
  )
}