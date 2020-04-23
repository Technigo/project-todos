import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { todos } from '../reducers/todos'
import { DoneButton } from './DoneButton'
import { TimeData } from './TimeData'
import { TextButton } from '../lib/TextButton'
import { ItemCalendar } from './Calendar'
import { FlexColumn } from '../lib/FlexColumn'

const ItemContainer = styled.div`
  width: 100%;
  border-bottom: 3px solid #f0f0f0;
  padding: 16px;  
   display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #FCFCFC;
  font-size: 20px;
  color: #a3a3a3;
  &:hover {
    background-color: papayawhip;
}
`

const LeftSideContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ToDoItem = (props) => {
  const { index, ...toDoItem } = props
  const dispatch = useDispatch()
  const calendarButtonText = (item) => {
    if (item.calendar) {
      return "[Hide Calendar]"
    } else {
      return "[Add Due Date]"
    }
  }

  const removeItem = (index, toDoItem) => {
    dispatch(
      todos.actions.removeTodo({ itemIndex: index, category: toDoItem.category })
    )
  }

  const showCalendar = (index, item) => {
    dispatch(
      todos.actions.toggleCalendar({ itemIndex: index, calendar: !item.calendar, category: item.category })
    )
  }
  return (
    <ItemContainer>
      {!toDoItem.calendar &&
        <LeftSideContainer>
          <DoneButton index={index} done={toDoItem.done} category={toDoItem.category} />
          <FlexColumn align="none">
            <p style={{ margin: "0", textDecoration: toDoItem.done ? "line-through" : "" }}>{toDoItem.description}</p>
            <TimeData {...toDoItem} />
          </FlexColumn>
        </LeftSideContainer>}
      {toDoItem.calendar &&
        <ItemCalendar index={index} category={toDoItem.category} />
      }
      <FlexColumn>
        {!toDoItem.done &&
          <TextButton color="blue" onClick={() => showCalendar(index, toDoItem)}>{calendarButtonText(toDoItem)}</TextButton>}
        < TextButton color="#a3a3a3" onClick={() => removeItem(index, toDoItem)}>[remove]</TextButton>
      </FlexColumn>
    </ItemContainer>
  )
}