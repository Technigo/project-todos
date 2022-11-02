/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';

const AddTask = () => {
  const [todo, setTodo] = useState('')
  const dispatch = useDispatch()

  const onAddTask = () => {
    dispatch(tasks.actions.addTask(todo))
    setTodo('')
  }

  const onCheckAllTask = () => {
    dispatch(tasks.actions.checkAllTask())
  }

  return (
    <div>
      <div>
        <button
          onClick={onAddTask}
          disable={todo.length >= 50 || todo.length <= 2}>
            Add your task!
        </button>
        <div>
          <button onClick={onCheckAllTask}>Check your task!</button>
          <button onClick={() => { dispatch(tasks.actions.clearTask()) }}>
            Clear your Board!
          </button>
        </div>
      </div>
    </div>

  )
}

export default AddTask;