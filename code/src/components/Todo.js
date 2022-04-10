import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
// import { useSelector } from 'react-redux'
import styled from "styled-components/macro"

import { formatRelative } from 'date-fns'
import enGB from 'date-fns/locale/en-GB'
// import moment from 'moment'


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

  const isDone = () => {
    if (todo.completed) {
      return { opacity: "0.5" }
      // return { textDecoration: "line-through", opacity: "0.5" }
    } else {
      return { opacity: "1" }
      // return { textDecoration: "none", opacity: "1" }
    }
  }

  const onCheck = () => {
    if (todo.completed) {
      return <FontAwesomeIcon icon={faCircleCheck} />
    } else {
      return <FontAwesomeIcon icon={faCircle} />
    }
  }

  const iconCategory = () => {
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

  const locale = {
    ...enGB,
    formatRelative: (token) => formatRelativeLocale[token],
  }

  const formattedDeadline = formatRelative((new Date(todo.deadline)), new Date(), { locale })
  // const formattedTimestamp = moment(todo.timestamp).format('dddd, h:mm a')
  const formattedTimestamp = formatRelative((new Date(todo.timestamp)), new Date(), { locale })

  useEffect(() => {
    if (todo.deadline < Date.now()) {
      setIsOverdue({ color: "red" })
      console.log('deadline dépassé')
      // cochon = { color: "red" }
    } else {
      console.log('deadline à venir')
    }
  }, [todo.deadline])

  console.log(todo.timestamp)
  return (
    <div>
      <label className="custom-checkbox" style={isDone()} onChange={onCompletedChange}>
        <input type="checkbox" />
        {onCheck()}
        <span style={isOverdue}>{todo.text} {iconCategory()} deadline: {formattedDeadline}, created: {formattedTimestamp}</span>
      </label>
      <DeleteButton type="button" onClick={onDeleteTodo}><FontAwesomeIcon icon={faTrashCan} /></DeleteButton>
    </div>
  )
}
