import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Todo } from 'Components/ToDo'
import './list.css'


export const List = () => {
  const tasks = useSelector(state => state.list.tasks)
  const doneTasks = tasks.filter(task => task.done === true)
  const todoTasks = tasks.filter(task => task.done === false)
  const [showTodo, setShowTodo] = useState(false)
  const [showDone, setShowDone] = useState(false)
  const [showAll, setShowAll] = useState(true)
  return (
    <div>
        <button
            type='button'
            onClick={() => {
            setShowTodo(false)
            setShowDone(false)
            setShowAll(true)
        }}>
        Show all
      </button>
      <button
        type='button'
        onClick={() => {
          setShowTodo(true)
          setShowDone(false)
          setShowAll(false)
        }}>
        Show todo
      </button>
      <button
        type='button'
        onClick={() => {
          setShowTodo(false)
          setShowDone(true)
          setShowAll(false)
        }}>
        Show done
      </button>
​
      <>{showAll && tasks.map(task => <Todo key={task.id} task={task} />)}</>
      <>
        {showTodo && todoTasks.map(task => <Todo key={task.id} task={task} />)}
      </>
      <>
        {showDone && doneTasks.map(task => <Todo key={task.id} task={task} />)}
      </>
    </div>
  )
}