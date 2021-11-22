import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import moment from 'moment'
import { useSwipeable } from 'react-swipeable'

import { todos } from '../reducers/todos'

const TodoSection = styled.section`
  padding: 0 10px;
`
const TodoItem = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgb(244, 244, 244);
  padding: 1.5rem 5px;
  box-sizing: border-box;
  background-color: rgb(255, 255, 255);
`
const Checkbox = styled.input`
  width: 20px;
  height: 20px;
`
const Button = styled.button`
  margin: 5px;
  height: 40px;
  width: 40px;
  font-size: 1rem;
  text-align: center;
  border-radius: 10px;
  border: 0;
  color: black;
`
const Data = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  & p {
    font-size: 0.8rem;
  }
  & h3 {
    font-size: 1.5rem;
    width: 250px;
    margin: 0;
    overflow: hidden;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`

export const TodoList = () => {
  const items = useSelector(store => store.todos.items)
  const [swiping, setSwiping] = useState(false)
  const dispatch = useDispatch()

  const onToggleTodo = id => {
    dispatch(todos.actions.toggleTodo(id))
  }

  const onDeleteTodo = id => {
    dispatch(todos.actions.deleteTodo(id))
  }

  const onSelectItem = id => {
    dispatch(todos.actions.setSelectedItem(id))
  }

  const swipeHandlers = useSwipeable({
    onSwiped: () => setSwiping(false),
    onSwiping: () => setSwiping(true),
    ...{
      delta: 10, // min distance(px) before a swipe starts. *See Notes*
      preventDefaultTouchmoveEvent: false, // call e.preventDefault *See Details*
      trackTouch: true, // track touch input
      trackMouse: false, // track mouse input
      rotationAngle: 0, // set a rotation angle
    },
  })

  return (
    <>
      <div {...swipeHandlers}> You can swipe here {swiping && <p>you're swiping</p>}</div>
      <TodoSection>
        {items
          .filter(item => !item.isComplete)
          .map(item => (
            <TodoItem key={item.id}>
              <Checkbox
                type='checkbox'
                checked={item.isComplete}
                onChange={() => onToggleTodo(item.id)}
              />
              <Data>
                <h3 onClick={() => onSelectItem(item.id)}>{item.text}</h3>
                {item.subTasks.length > 0 && `Subtasks: ${item.subTasks.length}`}
                {!item.dueDate && <p>Created: {moment(item.createdAt).fromNow()}</p>}
                {item.dueDate && <p>Due: {moment(item.dueDate).fromNow()}</p>}
              </Data>
              <Button onClick={() => onDeleteTodo(item.id)}>x</Button>
            </TodoItem>
          ))}
      </TodoSection>
    </>
  )
}
