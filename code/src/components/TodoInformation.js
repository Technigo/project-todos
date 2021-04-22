import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import TaskCounter from './TaskCounter'

const TodoInformation = () => {
  const [startDate, setStartDate] = useState(new Date())
  return (
    <div className="todo-information-container">
      <div className="main-title-date-container">
        <h1 className="main-title">Todo</h1>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>
      <div className="task-number-container">
        <TaskCounter />
        <button>clear all</button>
      </div>
    </div>
  )
}

export default TodoInformation
