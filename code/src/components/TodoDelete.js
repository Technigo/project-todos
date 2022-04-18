import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { deleteTask } from 'reducers/tasks'

const DeleteButton = styled.button`
    background-color: white;
    border: 1px solid red;
    color: red;
    border-radius: 50px;
`

export const TodoDelete = ({ todoItem }) => {

  const dispatch = useDispatch();

  const removeTask = () =>{
      dispatch(
          deleteTask({
              id: todoItem.id
          })
      )
  }

  return (
    <div>
        <DeleteButton onClick={removeTask}>
            Delete task
        </DeleteButton>
    </div>
  )
}
