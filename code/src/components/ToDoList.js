import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { toDos } from 'reducers/toDos'

export const ToDoList = () => {
  const toDoList = useSelector((store) => store.toDos.items)
  const dispatch = useDispatch()

  return (
    <div>
      <StyledList>
        {toDoList.map((singleToDo) => {
          return (
            <li key={singleToDo.id}>
              <input type="checkbox" checked={singleToDo.checked} onChange={() => dispatch(toDos.actions.toggleChecked(singleToDo))} />
              {singleToDo.name}
              <DeleteButton type="button" onClick={() => dispatch(toDos.actions.deleteToDo(singleToDo))}> ⌫</DeleteButton>
            </li>
          )
        })}
      </StyledList>
    </div>
  )
}

const DeleteButton = styled.button`
border: none;
background: none;
color: #9fe6dc;
font-size: 1rem;
`

const StyledList = styled.ul`
list-style-type: none;
`