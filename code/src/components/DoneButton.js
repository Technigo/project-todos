import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { todos } from '../reducers/todos'

const Button = styled.button`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  border: 1px solid #6979f8;
  color: white;
  font-size: 20px;
  margin-right: 8px;
`

export const DoneButton = (props) => {
    const { done, category, index } = props
    const dispatch = useDispatch()

    const toggleDone = (index, done, category) => {
        dispatch(
            todos.actions.toggleDone({ itemIndex: index, done: !done, category: category })
        )
    }

    const buttonText = (done) => {
        if (done) {
            return "✓"
        } else {
            return ""
        }
    }

    return (
        <Button
            style={{ backgroundColor: done ? "#6979f8" : "#ffffff" }}
            onClick={() => toggleDone(index, done, category)}>{buttonText(done)}
        </Button>
    )
}