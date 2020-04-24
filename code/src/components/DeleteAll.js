import React from 'react'
import { useDispatch, } from 'react-redux'
import { todos } from '../reducers/todos'
import styled from 'styled-components'

export const DeleteAll = () => {
  // const list = useSelector(store => store.todos.items)
  const dispatch = useDispatch()

  //Tar bort alla och ger en empty state
  const onClick = () => dispatch(todos.actions.deleteAll())

  return (
    <>
      {/* Om det finns fler än 0 items så ska de raderas */}

      <DeleteAllButton
        onClick={onClick}>
        Delete all
          </DeleteAllButton>
    </>
  )
}

const DeleteAllButton = styled.button`
  height: 40px;  
  margin: 0;
  padding: 10px;
  box-sizing: border-box;
  border: none;
  border-radius: 5px;
  background-color:#502F4C;
  color:#F9F4F5;
  font-family: 'Noto Sans';
  font-size: 16px;
  cursor: pointer;
  transition: border-color .4s ease-out;
  &:hover {
    background-color: #70587C;
  }
`