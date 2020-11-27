import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import { tasks } from 'reducers/tasks'
import trashcan from '../assets/trashcan.png'


export const Task = ({ item }) => {
  const dispatch = useDispatch()

  // const items = useSelector((store) => store.tasks.items)

  const handleDelete = (id) => {
    dispatch(tasks.actions.removeTask(id))
  }

  
  return (
    <TaskContainer>

       {/* <Checkbox
          type="checkbox"
          // onChange={handleOnChange}
          checked="checked">
        </Checkbox>  */}
      <TextWrapper>
        <TaskText>{item.text}</TaskText>
      </TextWrapper>
      <DeleteButton
        onClick={() => handleDelete(item.id)} > 
        <span role="img" aria-label="Delete">🗑️</span>
      </DeleteButton>
    </TaskContainer>

  )
}


const DeleteButton = styled.button`
width: 40px;
height: 40px;
margin-left: 10px;
border: none;
`

// const Checkbox = styled.input`
//   width: 30px;
//   height: 30px;
//  margin-right: 20px,
// `

const TaskContainer = styled.section`
  display: flex;  
  justify-content: flex-start;
  align-items: center; 
  margin-left: 30px;
  margin-top: 30px;
`
const TextWrapper = styled.div`
  /* background-color: #fdc1c5; */
  background-color: #e6e6e6;
  border: 1px solid grey;
  border-radius: 5px;
  width: auto;
  
  padding: 0 10px;
  
  
`
const TaskText = styled.p`
  font-size: 20px;
  font-weight: bold;
`