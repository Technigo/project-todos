/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled, { css } from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { tasks } from '../reducers/tasks'
import DottedTab from './Assets/dottedTab.png'
import CheckeredTab from './Assets/checkeredTab.png'

export const TaskList = () => {
  const dispatch = useDispatch()

  const allTasks = useSelector((store) => store.tasks.items)
  const tasksToBeDone = allTasks.filter((task) => !task.checked)
  const tasksDone = allTasks.filter((task) => task.checked)

  const onClearAllBtnClick = () => {
    dispatch(tasks.actions.deleteAllTasks())
  }

  // Shows tasks-checkboxes in 2 section: to do / done.
  // If the to-do section is cleared, shows a message.
  // If there are 1 or more tasks, show clear-all button.
  return (
    <ListWrapper>
      <ListSectionWrapper>
        <TabWrapper>
          <Tab src={DottedTab} alt="tab" />
          <TabText>To Do ({tasksToBeDone.length})</TabText>
        </TabWrapper>
        {tasksToBeDone.length === 0
          && <CompletionMessage>
            <svg width="23" height="27" viewBox="0 0 43 47" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="-3" x2="39.6582" y2="-3" transform="matrix(0.302153 -0.95326 0.805656 0.592384 17.2885 41.8046)" stroke="black" strokeWidth="6" />
              <line y1="-3" x2="19.6254" y2="-3" transform="matrix(-0.669173 -0.743107 0.570901 -0.821019 17.2885 41.8046)" stroke="black" strokeWidth="6" />
            </svg>
            All done!
          </CompletionMessage>}
        {tasksToBeDone.map((task) => {
          return (
            <TaskItemWrapper>
              <Label key={task.id}>
                <Input type="checkbox" checked={task.checked} onChange={() => dispatch(tasks.actions.toggleChecked(task))} />
                {task.text}
              </Label>
              <Button type="button" onClick={() => dispatch(tasks.actions.deleteSingleTask(task))}>X</Button>
            </TaskItemWrapper>
          )
        })}
      </ListSectionWrapper>

      <ListSectionWrapper>
        <TabWrapper>
          <Tab src={CheckeredTab} alt="tab" />
          <TabText>Done! ({tasksDone.length})</TabText>
        </TabWrapper>
        {tasksDone.map((task) => {
          return (
            <TaskItemWrapper>
              <Label dashed key={task.id}>
                <Input type="checkbox" checked={task.checked} onChange={() => dispatch(tasks.actions.toggleChecked(task))} />
                {task.text}
              </Label>
              <Button type="button" onClick={() => dispatch(tasks.actions.deleteSingleTask(task))}>X</Button>
            </TaskItemWrapper>
          )
        })}
      </ListSectionWrapper>
      <ButtonWrapper>
        {allTasks.length >= 1 && <Button deleteAll type="button" onClick={onClearAllBtnClick}>Clear all tasks</Button>}
      </ButtonWrapper>
    </ListWrapper>
  )
}

// styled components

const ListWrapper = styled.section`
margin-top: 2rem
`

const ListSectionWrapper = styled.div`
margin-bottom: 3.5rem;
`

const TabWrapper = styled.div`
  position: relative;
  width: 190px;
  height: 75px;
  display: flex;
  align-items: center;
`
const Tab = styled.img`
  width: 190px;
  height: 75px;
  margin-left: -3.5rem;
  position: absolute;
`

const TabText = styled.h2`
  font-weight: 700;
  font-size: 1.8rem;
  background-color: #ddf3ff;
  padding: 3px 5px;
  border-radius: 5px;
  width: fit-content;
  position: absolute;

`
const TaskItemWrapper = styled.div`
  display: flex;
`
const CompletionMessage = styled.p`
text-align: center;
font-size: 36px;
`

const Label = styled.label`
  display: block;
  width: 270px;
  text-align: left;
  margin: auto;
  background-color: transparent;
  font-size: 28px;
  ${(props) => props.dashed && css`
  text-decoration: line-through;
  `}
  `

const Input = styled.input`
  margin-right: 10px;
  accent-color: rgb(221, 243, 255);
`

const ButtonWrapper = styled.div`
height: 35px;
width: 290px;
display: block;
`

const Button = styled.button`
background: transparent;
font-size: 26px;
border: none;
cursor: pointer;
${(props) => props.deleteAll && css`
  margin: auto;
  display: block;
`}
&:hover {
  text-decoration: underline;
}
`