import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import moment from 'moment'
import { toDos } from 'reducers/toDos'
import { Checkbox } from './Checkbox'
import Bin from '../images/bin.png'

export const ToDoList = () => {
  const toDoList = useSelector((store) => store.toDos.items)
  const dispatch = useDispatch()
  useEffect(() => {
    const toDoFromLocalStorage = JSON.parse(localStorage.getItem('toDoList'))
    if (toDoFromLocalStorage) {
      dispatch(toDos.actions.setupStore(toDoFromLocalStorage))
    }
  }, [dispatch])

  return (
    <StyledList>
      {toDoList.map((singleToDo) => {
        return (
          <ToDoCard>
            <TaskContainer>
              <Label key={singleToDo.id}>
                <Checkbox type="checkbox" className="checkboxes" checked={singleToDo.checked} onChange={() => dispatch(toDos.actions.toggleChecked(singleToDo))} />
                {singleToDo.name}
              </Label>
              <DeleteButton type="button" onClick={() => dispatch(toDos.actions.deleteToDo(singleToDo))}> <Delete src={Bin} /></DeleteButton>
            </TaskContainer>
            <DateDiv>
              <Date>Created {moment(toDos.date).format('DD/MMM-YY')}</Date>
            </DateDiv>
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

const Label = styled.label`
display: flex;
flex-direction:row;
align-items: center;
gap: 16px;
`

const ToDoCard = styled.section`
display: flex;
flex-direction: column;
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
const TaskContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
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
const Delete = styled.img`
height: 16px;
weight: 16px;
`

const DateDiv = styled.div`
display: flex;
justify-content: flex-end;
`

const Date = styled.div`
display: flex;
font-size: 8px;
color: grey;
`