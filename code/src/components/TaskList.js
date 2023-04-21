/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import tasks from 'reducers/tasks'
import styled from 'styled-components'
import { CheckBox } from './Checkbox'
import MinusIcon from '../minus-square-svgrepo-com(1).svg'

const TaskList = () => {
  const taskList = useSelector((store) => store.tasks.items)
  const dispatch = useDispatch()

  const onDeleteSingleTaskBtnClick = (id) => {
    dispatch(tasks.actions.deleteSingleTask(id))
  }

  const onIsDoneCheckboxToggle = (id) => {
    dispatch(tasks.actions.toggleIsDone(id))
  }

  const TaskListLi = styled.li`
    list-style: none;
    display: flex;
    gap: 2rem;
    position: relative;
  `

  /*   const DeleteButton = styled.button`
    background: white;
    border: none;
    border-radius: 3px;
    padding: 5px 10px 10px 5px;
    align-self: flex-end;
  ` */

  const Delete = styled.img`
    height: 50px;
  `

  const StyledLabel = styled.label`
    font-size: 14px;
    font-weight: 500;
    color: white;
  `
  const TaskListContainer = styled.section`
    position: relative;
  `

  const TaskUl = styled.ul`
    gap: 1rem;
    display: flex;
    flex-direction: column;
  `

  const StyledWrapper = styled.div`
    border: 2px solid white;
    display: flex;
    gap: 5rem;
  `

  const TaskListH2 = styled.h2`
    font-size: 18px;
    color: white;
    font-weight: 500;
  `

  return (
    <TaskListContainer>
      <TaskUl>
        {taskList.map((singleTask) => {
          return (
            <StyledWrapper>
              <TaskListLi key={singleTask.id}>
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
      <TaskListH2>
        Completed: {taskList.filter((task) => task.isDone).length} /{' '}
        {taskList.length}
      </TaskListH2>
    </TaskListContainer>
  )
}

export default TaskList
