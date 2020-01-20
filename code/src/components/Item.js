/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { useDispatch } from 'react-redux'
import { fridge } from 'reducers/fridge'
import styled from 'styled-components'
import moment from 'moment'

export const Item = (props) => {
  const dispatch = useDispatch()

  const handleCheckClick = () => {
    dispatch(fridge.actions.toggleDone(props.item.id))
  }

  const handleRemovekClick = () => {
    dispatch(fridge.actions.removeItem(props.item.id))
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
            <Task>{props.item.task}</Task>
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
  background: #ece8ff;
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
`
const TaskWrapper = styled.article`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
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
