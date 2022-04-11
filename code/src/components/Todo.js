import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
// import { useSelector } from 'react-redux'
import styled from "styled-components/macro"
import { formatRelative } from 'date-fns'
import enGB from 'date-fns/locale/en-GB'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCircle } from '@fortawesome/free-solid-svg-icons'
// import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
// import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
// import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
// import { faEraser } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
// import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { faPerson } from '@fortawesome/free-solid-svg-icons'

import { todos } from 'reducers/todos'

const DeleteButton = styled.button`
  display: inline-block;
  border: none;
  padding: 0;
  background: transparent;
  color: #000;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  margin-left: 0.5rem;
`

export const Todo = ({ todo, id }) => {
  const dispatch = useDispatch()

  const [isOverdue, setIsOverdue] = useState({})
  // const isChecked = () => {
  //   if (todo.completed) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }

  // maybe combine these two?
  const isDone = () => {
    if (todo.completed) {
      return { opacity: "0.5" }
      // return { textDecoration: "line-through", opacity: "0.5" }
    } else {
      return { opacity: "1" }
      // return { textDecoration: "none", opacity: "1" }
    }
  }

  const onToggle = () => {
    if (todo.completed) {
      return <FontAwesomeIcon icon={faCircleCheck} />
    } else {
      return <FontAwesomeIcon icon={faCircle} />
    }
  }

  const categoryIcon = () => {
    if (todo.category === 'personal') {
      return <FontAwesomeIcon icon={faPerson} />
    } else if (todo.category === 'work') {
      return <FontAwesomeIcon icon={faBriefcase} />
    } else if (todo.category === 'school') {
      return <FontAwesomeIcon icon={faGraduationCap} />
    }
  }

  const onDeleteTodo = () => {
    dispatch(todos.actions.deleteTodo(id))
  }

  const onCompletedChange = () => {
    dispatch(todos.actions.toggleTodo(id))
  }

  const formatRelativeLocale = {
    lastWeek: "'last' eeee",
    yesterday: "'yesterday'",
    today: "'today'",
    tomorrow: "'tomorrow'",
    nextWeek: "'next' eeee",
    other: 'dd.MM.yyyy',
  }

  const formatRelativeLocaleWithTime = {
    lastWeek: "'last' eeee",
    yesterday: "'yesterday'",
    today: "'today' HH.mm",
    tomorrow: "'tomorrow'",
    nextWeek: "'next' eeee",
    other: 'dd.MM.yyyy',
  }


  const locale = {
    ...enGB,
    formatRelative: (token) => formatRelativeLocale[token],
  }

  const localeWithTime = {
    ...enGB,
    formatRelative: (token) => formatRelativeLocaleWithTime[token],
  }


  const dateDeadline = (new Date(todo.deadline))
  const dateTimestamp = (new Date(todo.timestamp))
  const formattedDeadline = formatRelative(dateDeadline, new Date(), { locale })
  const formattedTimestamp = formatRelative(dateTimestamp, new Date(), { localeWithTime })

  useEffect(() => {
    if (todo.deadline < Date.now() && !todo.completed) {
      setIsOverdue({ color: "red" })
    }
  }, [todo.deadline, todo.completed])

  return (
    <div>
      <label className="custom-checkbox" style={isDone()} onChange={onCompletedChange}>
        <input type="checkbox" />
        {onToggle()}
        <span style={isOverdue}>{todo.text} {categoryIcon()} deadline: {formattedDeadline}, created: {formattedTimestamp}</span>
      </label>
      <DeleteButton type="button" onClick={onDeleteTodo}><FontAwesomeIcon icon={faTrashCan} /></DeleteButton>
    </div>
  )
}
