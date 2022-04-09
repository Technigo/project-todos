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

import { useSelector } from 'react-redux'

import { Todo } from './Todo'

import React, { useEffect, useState } from "react"
import Sortable from "sortablejs"

export const NotCompletedTodosList = () => {
  const allTodos = useSelector((store) => store.todos.items)
  const notCompletedTodos = allTodos.filter(todo => !todo.completed)

  const [droppable, setDroppable] = useState(null)

  useEffect(() => {
    if (droppable) {
      Sortable.create(droppable, {
        easing: "cubic-bezier(0.2, 0, 0, 1)",
        animation: 150,
        // className: "container",
        ghostClass: "dragging",
        // scrollFn: function (offset) {
        //   console.log("i'm here scrolling", offset);
        //   return false;
        // },
        scroll: true,
        scrollSensitivity: 100,
        bubbleScroll: true
      })
    }
  }, [droppable])

  return (
    <>
      <hr></hr>
      <p>To do</p>

      <div ref={(el) => setDroppable(el)}>
        {notCompletedTodos.map((todo) => (
          <Todo key={todo.id} todo={todo} id={todo.id} />
        ))}
      </div>

    </>
  )
}
