/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import tasks from 'reducers/tasks'
import styled from 'styled-components'
import { CheckBox } from './Checkbox'
import MinusIcon from '../img/minus-square-svgrepo-com.svg'

const TaskListLi = styled.li`
  list-style: none;
  display: flex;
  gap: 2rem;
  position: relative;
`
const Delete = styled.img`
  height: 2rem;
  align-self: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`

const StyledLabel = styled.label`
  display: flex;
  font-size: 14px;
  font-weight: 500;
  color: white;
  align-items: center;
`
const TaskListContainer = styled.section`
  position: relative;
`

const TaskUl = styled.ul`
  gap: 1rem;
  display: flex;
  flex-direction: column;
  padding-left: 0;
`

const StyledWrapper = styled.div`
    background: rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: space-between;
    align-ite
  `

const TaskListH2 = styled.h2`
  font-size: 18px;
  color: #f5f5f5;
  font-weight: 500;
`

const DeleteAll = styled.button`
background: transparent;
border: 1px solid #f5f5f5;
color: #f5f5f5;
padding: 0.5rem 1rem;
border-radius: 6px;
transition: all 0.2s ease-in-out;

&:hover {
  transform: scale(1.2);
}
`
const NoTasksP = styled.p`
background: rgba(0, 0, 0, 0.3);
border-radius: 8px;
padding: 0.5rem 1rem;
color: #f5f5f5;
font-size: 20px;
text-align: center;
`

const TaskList = () => {
  const taskList = useSelector((store) => store.tasks.items)
  const dispatch = useDispatch()

  const onDeleteAllTasksBtnClick = () => {
    dispatch(tasks.actions.deleteAllTasks())
  }

  const onDeleteSingleTaskBtnClick = (id) => {
    dispatch(tasks.actions.deleteSingleTask(id))
  }

  const onIsDoneCheckboxToggle = (id) => {
    dispatch(tasks.actions.toggleIsDone(id))
  }
  return (
    <TaskListContainer>
      <TaskUl>
        {taskList.map((singleTask) => {
          return (
            <StyledWrapper key={singleTask.id}>
              <TaskListLi>
                <StyledLabel htmlFor={`task${singleTask.id}`}>
                  <CheckBox
                    id={`task${singleTask.id}`}
                    type="checkbox"
                    name="checktask"
                    checked={singleTask.isDone}
                    onChange={() => onIsDoneCheckboxToggle(singleTask.id)}
                  />
                  {singleTask.name}
                </StyledLabel>
              </TaskListLi>
              <Delete
                src={MinusIcon}
                onClick={() => onDeleteSingleTaskBtnClick(singleTask.id)}
              />
            </StyledWrapper>
          )
        })}
      </TaskUl>
      {taskList.length === 0 && <NoTasksP>No tasks yet!</NoTasksP>}
      <TaskListH2>
        Completed: {taskList.filter((task) => task.isDone).length} /{' '}
        {taskList.length}
      </TaskListH2>
      <DeleteAll type="button" onClick={() => onDeleteAllTasksBtnClick()}>Delete all</DeleteAll>
    </TaskListContainer>
  )
}

export default TaskList
