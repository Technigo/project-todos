import React from "react"
import Calendar from 'react-calendar'
import { useDispatch } from 'react-redux'
import { todos } from '../reducers/todos'

export const ItemCalendar = (props) => {
    const { index, category } = props
    const dispatch = useDispatch()

    const setDueDate = (value, index, category) => {
        dispatch(
            todos.actions.setDueDate({ itemIndex: index, dueDate: value.toLocaleDateString(), calendar: false, category: category })
        )
    }

    return (
        <Calendar
            minDate={new Date(Date.now())}
            onClickDay={(value) => setDueDate(value, index, category)} />
    )
}