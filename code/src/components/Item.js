/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { tasks } from 'reducers/tasks'
import styled from 'styled-components'
import moment from 'moment'

export const Item = (props) => {
  const dispatch = useDispatch()
  const allTasks = useSelector((store) => store.tasks.items)
  console.log(allTasks.length)

  const handleCheckClick = () => {
    dispatch(tasks.actions.toggleDone(props.item.id))
  }

  const handleRemovekClick = () => {
    dispatch(tasks.actions.removeItem(props.item.id))
  }
  if (allTasks.length === 0) {
    return <Added>no tasks...</Added>
  }
  return (
    <List>
      <TaskWrapper>
        <Wrapper>
          <Checkbox>
            <CheckboxInput
              type="checkbox"
              checked={props.item.done}
              onChange={handleCheckClick}
            />
          </Checkbox>
          <TextWrapper>
            <Task completed={props.item.done}>{props.item.task}</Task>
            <Added>Added {moment(props.item.added).fromNow()}</Added>
          </TextWrapper>
        </Wrapper>
        <RemoveButton type="button" onClick={handleRemovekClick}>
          <span role="img" aria-label="trash">
            🗑️
          </span>
        </RemoveButton>
      </TaskWrapper>
    </List>
  )
}

const List = styled.section`
  background: #f0f0f0;
  margin: 1px;
  display: flex;
  flex-direction: column;
`
const Checkbox = styled.label`
  display: flex;
  align-items: center;
`

const CheckboxInput = styled.input`
  width: 30px;
  height: 30px;
  margin: 0px 20px;
  opacity: 0.2;
  transition: ease-in-out 200ms;
  &:checked {
    opacity: 0.8;
  }
`

const RemoveButton = styled.button`
  witdh: 200px;
  height: 20px;
  display: flex;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: ease-in-out 200ms;
  &:hover {
    opacity: 0.7;
    margin-right: 10px;
  }
`
const Task = styled.h1`
  font-size: 18px;
  margin: 0px;
  transition: ease-in-out 200ms;
  opacity: ${(props) => (props.completed ? '0.4' : '1')};
`
const TaskWrapper = styled.article`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1px;
  justify-content: space-between;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`
const Added = styled.p`
  margin: 2px;
  font-size: 10px;
  font-style: oblique;
`

const TextWrapper = styled.div`
  margin: 5px;
`
