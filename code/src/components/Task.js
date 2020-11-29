import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import { tasks } from 'reducers/tasks'
import { CheckBox } from './CheckBox'
// import trashcan from '../assets/trashcan.png'


export const Task = ({ item }) => {
  const dispatch = useDispatch()
  
  // const items = useSelector((store) => store.tasks.items)

  const handleDelete = (id) => {
    dispatch(tasks.actions.removeTask(id))
  }

  const handleCheckboxClick = () => {
    dispatch(tasks.actions.setChecked(item.id))
  };

  // const handleDeleteChecked = () => {
  //   dispatch(tasks.actions.removeTask(task.id))
  // };

 
  return (
    <TaskContainer>
      <CheckBox
      isChecked={item.complete}
      onChangeHandler={handleCheckboxClick}
      />
      <TextWrapper>                                                                                                                                                                                                                                                  
        <TaskText line={item.complete ? 'line-through' : null}>{item.text}</TaskText>
      
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

const TaskContainer = styled.section`
  display: flex;  
  justify-content: flex-start;
  align-items: center; 
  margin-left: 30px;
  /* margin-top: 30px; */
`
const TextWrapper = styled.div`
  /* background-color: #fdc1c5; */
  background-color: #e6e6e6;
  border: 1px solid grey;
  border-radius: 5px;
  width: auto;
  /* padding: 0 10px;   */
`
const TaskText = styled.p`
  font-size: 20px;
  font-weight: bold;
  text-decoration: ${(props) => props.line || 'none'};
  text-transform: none;
`

