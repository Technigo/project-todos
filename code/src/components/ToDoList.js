import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { toDos } from 'reducers/toDos'

export const ToDoList = () => {
  const toDoList = useSelector((store) => store.toDos.items)
  const dispatch = useDispatch()

  return (
    <StyledList>
      {toDoList.map((singleToDo) => {
        return (
          <ToDoCard>
            <List key={singleToDo.id}>
              <Checkboxes type="checkbox" className="checkboxes" checked={singleToDo.checked} onChange={() => dispatch(toDos.actions.toggleChecked(singleToDo))} />
              {singleToDo.name}
            </List>
            <DeleteButton type="button" onClick={() => dispatch(toDos.actions.deleteToDo(singleToDo))}> ⌫</DeleteButton>
          </ToDoCard>
        )
      })}
    </StyledList>
  )
}

const StyledList = styled.ul`
list-style-type: none;
display: flex;
flex-direction: column;
gap: 20px;
overflow: scroll;
padding: 10px;
`

const List = styled.li`
display: flex;
flex-direction:row;
align-items: center;
gap: 16px;
`

const ToDoCard = styled.section`
display: flex;
flex-direction: row;
justify-content: space-between;
background-color: #f0ece2;
box-shadow: 2px 2px #665d47;
border-radius: 10px;
padding: 10px 16px;
animation-name: slicing;
animation-duration 0.5s;
animation-timing-function: ease-in-out;

@keyframes slicing {
  0% {
    opacity: 0;
    transform: translateX(200px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
`

const DeleteButton = styled.button`
border: none;
background: none;
color: #9fe6dc;
font-size: 32px;

&:hover {
  cursor: pointer;
  transform: scale(1.2);
}
`

const Checkboxes = styled.input`
width: 20px;
height: 20px;
outline: 2px solid black;

&:before {
  background-color: red;
}
`