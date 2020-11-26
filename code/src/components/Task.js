import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import { tasks } from '../reducers/tasks'

export const Task = ({ item }) => {
  const dispatch = useDispatch()

  // const items = useSelector((store) => store.tasks.items)

  const onDeleteClicked = (id) => {
     dispatch(tasks.actions.removeTask(id))
  }
  return (
    <TaskContainer>
      
        <Checkbox
          type="checkbox"
          // onChange={handleOnChange}
          checked="checked">
        </Checkbox>
        <TextWrapper>
        <TaskText>{item.text}</TaskText>
        </TextWrapper>
        <DeleteButton
        onClick={() => onDeleteClicked(item.id)} >
        <span role="img" aria-label="Delete">🗑️</span>
        </DeleteButton>  
    </TaskContainer>
  )
}

const DeleteButton = styled.button`
width: 30px;
height: 30px;
margin-left: 10px;
`

const Checkbox = styled.input`
  width: 30px;
  height: 30px;
 margin-right: 20px,
`

const TaskContainer = styled.section`
  display: flex; 
  justify-content: flex-start;
  align-items: center; 
  margin: 20px;
`
const TextWrapper = styled.div`
  background-color: #fdc1c5;
  border: 1px solid grey;
  border-radius: 5px;
  width: auto;
  margin-left: 10px;
  /* display: flex; */
  padding: 0 10px;
  /* align-items: flex-start;
  justify-content: flex-start; */
  
`
const TaskText = styled.p`
  font-size: 20px;
  font-weight: bold;
`