import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled, { css } from 'styled-components'
import { tasks } from '../reducers/tasks'



export const Task = ({ itemIndex }) => {
  const item = useSelector(store => store.tasks.list.items[itemIndex])
  const dispatch = useDispatch()

  const handleOnChange = event => {
    dispatch(tasks.actions.setDone({
      itemIndex: itemIndex,
      done: !item.done
    }))
  }

  const onRemoveClicked = event => {
    dispatch(tasks.actions.removeTodo({
      itemIndex: itemIndex,
    }))
  }

  return (
    <div>
      <input
        type="checkbox"
        onChange={handleOnChange}
        checked={item.done ? 'chekced' : ''}
      ></input>
      <span>{item.description}</span>
      <a onClick={onRemoveClicked}>
        [Remove]
      </a>
    </div>
  )
}

const Text = styled.h2`
  background-color: lightyellow;

  &:hover {
    color: grey;
  }

  ${props => props.example && css`
  background-color: example;`}
  `
const SmallText = styled.h3`
    background-color: lightgreen;
  `
const Btn = styled.button`
    background-color: red;
    color: white;
    font-size: 32;
  `