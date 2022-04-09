/*
import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import styled from "styled-components/macro"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons'

import { todos } from 'reducers/todos'

import { Todo } from './Todo'

const AllButton = styled.button`
  display: inline-block;
  border: none;
  padding: 0;
  background: transparent;
  color: #000;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;

  &:disabled {
    color: red;
  }
`

export const TodosList = () => {
  const dispatch = useDispatch()

  const allTodos = useSelector((store) => store.todos.items)

  const notCompletedTodos = allTodos.filter(todo => !todo.completed)
  const completedTodos = allTodos.filter(todo => todo.completed)
  console.log(allTodos)

  const deleteAll = () => {
    dispatch(todos.actions.deleteAll())
  }

  const toggleAll = () => {
    dispatch(todos.actions.toggleAll())
  }

  return (
    <div>

      <hr></hr>
      <AllButton onClick={deleteAll}><FontAwesomeIcon icon={faTrash} /></AllButton>
      <hr></hr>
      <AllButton onClick={toggleAll}><FontAwesomeIcon icon={faCheckDouble} /></AllButton>
      <hr></hr>

      <hr></hr>

      <p>To do</p>
      <div>
        {notCompletedTodos.map((todo) => (
          <Todo key={todo.id} todo={todo} id={todo.id} />
        ))}
      </div>

      <hr></hr>

      <p>Completed</p>
      <div>
        {completedTodos.map((todo) => (
          <Todo key={todo.id} todo={todo} id={todo.id} />
        ))}
      </div>

      <hr></hr>

      <p>All</p>
      {allTodos.map((todo) => (
        <Todo key={todo.id} todo={todo} id={todo.id} />
      ))}

      <p>Completed tasks: {completedTodos.length}/{allTodos.length}</p>

    </div>
  )
}
*/



import React, { useState } from "react"
import { useDispatch } from 'react-redux'
import styled from "styled-components/macro"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons'

import { todos } from 'reducers/todos'

import { CompletedTodosList } from './CompletedTodosList'
import { NotCompletedTodosList } from './NotCompletedTodosList'
import { AllTodosList } from './AllTodosList'

const AllButton = styled.button`
  display: inline-block;
  border: none;
  padding: 0;
  background: transparent;
  color: #000;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;

  &:disabled {
    color: red;
  }
`

export const TodosList = () => {
  const dispatch = useDispatch()

  const [allVisible, setAllVisible] = useState('block')
  const [completedVisible, setCompletedVisible] = useState('none')
  const [notCompletedVisible, setNotCompletedVisible] = useState('none')

  const deleteAll = () => {
    dispatch(todos.actions.deleteAll())
  }

  const toggleAll = () => {
    dispatch(todos.actions.toggleAll())
  }

  const onDisplayAll = () => {
    if (allVisible === 'none') {
      setCompletedVisible('none')
      setNotCompletedVisible('none')
      setAllVisible('block')
    } else {
      setAllVisible('none')
      // setCompletedVisible('block')
    }
  }

  const onDisplayCompleted = () => {
    if (completedVisible === 'none') {
      setAllVisible('none')
      setNotCompletedVisible('none')
      setCompletedVisible('block')
    } else {
      setCompletedVisible('none')
      // setNotCompletedVisible('block')
    }
  }

  const onDisplayNotCompleted = () => {
    if (notCompletedVisible === 'none') {
      setAllVisible('none')
      setCompletedVisible('none')
      setNotCompletedVisible('block')
    } else {
      setNotCompletedVisible('none')
      // setAllVisible('block')
    }
  }


  return (
    <>
      <AllButton onClick={deleteAll}><FontAwesomeIcon icon={faTrash} /></AllButton>
      <hr></hr>
      <AllButton onClick={toggleAll}><FontAwesomeIcon icon={faCheckDouble} /></AllButton>
      <hr></hr>

      <button onClick={onDisplayAll}>All</button>
      <button onClick={onDisplayCompleted}>Completed</button>
      <button onClick={onDisplayNotCompleted}>Not completed</button>


      <div style={{ display: allVisible }}>
        <AllTodosList />
      </div>

      <div style={{ display: completedVisible }}>
        <CompletedTodosList />
      </div>

      <div style={{ display: notCompletedVisible }}>
        <NotCompletedTodosList />
      </div>

    </>
  )
}
