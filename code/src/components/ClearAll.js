import React from 'react'
import todos from '../reducers/todos'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

const ClearAllButton = styled.button`
  background-color: transparent;
    border: none;
    color: grey;
    font-size: 16px;
    cursor: pointer;
    margin-bottom: 5px;

    .fas {
      padding-left: 0px;
    }
  `

const ClearAll = () => {
  //Get correct item from store based on index
  const dispatch = useDispatch()

  //Calling clearAllTodos with dispatch 
  const clearAll = () => {
    dispatch(todos.actions.clearAll())
    localStorage.clear()
  }

return (
    <ClearAllButton
      onClick={clearAll}>
      Clear all <i className="fas fa-folder-minus"></i>
    </ClearAllButton>
  )
}

export default ClearAll