/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { useDispatch } from 'react-redux'
import { fridge } from 'reducers/fridge'
import styled from 'styled-components'

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
        <Checkbox>
          <CheckboxInput
            type="checkbox"
            checked={props.item.done}
            onChange={handleCheckClick}
          />
        </Checkbox>
        <Task>{props.item.task}</Task>
        <RemoveButton type="button" onClick={handleRemovekClick}>
          remove
        </RemoveButton>
      </TaskWrapper>
    </List>
  )
}

const List = styled.section`
  background: #c0b7b1;
  margin: 1px;
  display: flex;
  flex-direction: column;
`
const Checkbox = styled.label``

const CheckboxInput = styled.input`
  display: flex;
  flex-direction: row;
  border-bottom: 2px solid gray;
`

const RemoveButton = styled.button`
  witdh: 200px;
  height: 20px;
  display: flex;
`
const Task = styled.h2`
  font-size: 18px;
`

const TaskWrapper = styled.article`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
`
