import React, { useState } from "react"
import Moment from 'react-moment'
import moment from "moment"
import Calendar from 'react-calendar'
import { useSelector, useDispatch } from "react-redux"
import { todos } from '../reducers/todos'
import styled from 'styled-components'

const ToDoItem = styled.div`
  width: 100%;
  border-bottom: 3px solid #f0f0f0;
  padding: 16px;  
   display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #FCFCFC;
  font-size: 20px;
  color: #a3a3a3;
`

const DoneButton = styled.button`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  border: 1px solid #6979f8;
  color: white;
  font-size: 20px;
  margin-right: 8px;
`

const LeftSideContainer = styled.div`
  display: flex;
  align-items: center;
`
const RightSideContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const RemoveButton = styled.button`
color: #a3a3a3;
  font-size: 12px;
  background-color: transparent;
  border: none;
`
const CalenderButton = styled.button`
  font-size: 12px;
  background-color: transparent;
  border: none;
  color: blue;
`
const TimeStamp = styled.p`
  font-size: 12px;
  margin: 2px;
`


export const ToDoList = () => {
    const list = useSelector((store) => store.todos.list.items)
    const dispatch = useDispatch()

    const toggleDone = (index, item) => {
        dispatch(
            todos.actions.toggleDone({ itemIndex: index, done: !item.done })
        )
    }

    const buttonText = (item) => {
        if (item.done) {
            return "✓"
        } else {
            return ""
        }
    }

    const calendarButtonText = (item) => {
        if (item.calendar) {
            return "[Hide Calendar]"
        } else {
            return "[Add Due Date]"
        }
    }

    const removeItem = (index) => {
        dispatch(
            todos.actions.removeTodo({ itemIndex: index })
        )
    }

    const showCalendar = (index, item) => {
        dispatch(
            todos.actions.toggleCalendar({ itemIndex: index, calendar: !item.calendar })
        )
    }

    const setDueDate = (value, index) => {
        dispatch(
            todos.actions.setDueDate({ itemIndex: index, dueDate: value.toLocaleDateString(), calendar: false })
        )
    }
    const checkTimeLeft = (item) => {
        if (!item.dueDate) {
            return
        } else if (item.dueDate) {
            const due = moment(item.dueDate);
            const timeDiff = moment(due.diff(Date.now()))
            const duration = moment.duration(timeDiff._i)

            if (duration._data.days >= 7) {
                return `Due: ${item.dueDate}`
            } else if (duration._data.days < 7 && duration._data.days !== 0) {
                return `Due in ${duration._data.days} days`
            } else if (duration._data.days === 0) {
                return `Due in ${duration._data.hours} hours`
            } else if (duration._data.days === 0 && duration._data.hours === 0) {
                return `Due in ${duration._data.minutes}} minutes`
            }
        }
    }

    const timeLeftColor = (item) => {
        const due = moment(item.dueDate);
        const timeDiff = moment(due.diff(Date.now()))
        const duration = moment.duration(timeDiff._i)
        if (duration._data.days === 0 && duration._data.hours < 6) {
            return "red"
        } else if (duration._data.days === 0) {
            return "orange"
        } else {
            return "#a3a3a3"
        }
    }

    return (
        list.map((item, index) => {

            return (
                <ToDoItem>
                    <LeftSideContainer>
                        <DoneButton
                            style={{ backgroundColor: item.done ? "#6979f8" : "#ffffff" }}
                            onClick={() => toggleDone(index, item)}>{buttonText(item)}</DoneButton>
                        <div>
                            <p style={{ margin: "0", textDecoration: item.done ? "line-through" : "" }}>{item.description}</p>
                            <TimeStamp>posted {item.created}</TimeStamp>
                            {item.dueDate && !item.done &&
                                <TimeStamp style={{
                                    color: timeLeftColor(item)
                                }}>
                                    {checkTimeLeft(item)}</TimeStamp>}
                        </div>
                    </LeftSideContainer>
                    {item.calendar &&
                        <Calendar onClickDay={(value) => setDueDate(value, index)} />}
                    <RightSideContainer>
                        <CalenderButton onClick={() => showCalendar(index, item)}>{calendarButtonText(item)}</CalenderButton>
                        <RemoveButton onClick={() => removeItem(index)}>[remove]</RemoveButton>
                    </RightSideContainer>
                </ToDoItem>
            )
        })
    )
}