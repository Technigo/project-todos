import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { formatRelative, formatDistanceToNow } from 'date-fns'
import enGB from 'date-fns/locale/en-GB'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircle,
  faFaceDizzy,
  faFaceFlushed,
  faFaceGrinSquintTears,
  faFaceMeh,
  faFaceGrinBeam,
  faCircleCheck,
  faTrashCan,
} from '@fortawesome/free-regular-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import todos from 'reducers/todos'

import {
  TodoDeleteButton,
  TodoCategoryIcon,
  TodoToggleIcon,
  TodoDragIcon,
  TodoText,
  TodoToggleBox,
  TodoDragBox,
  TodoArticle,
  TodoMiddleBox,
  TodoDeadline,
  TodoTimestamp
} from './styles/todoStyles'

const Todo = ({ todo, id, setIsUndoDisabled }) => {

  const dispatch = useDispatch()

  const [isOverdue, setIsOverdue] = useState({})

  let toggleStyle = {}
  let toggleIcon = ''

  if (todo.completed) {
    toggleStyle = { opacity: "0.5" }
    toggleIcon = <FontAwesomeIcon icon={faCircleCheck} />
  } else {
    toggleStyle = { opacity: "1" }
    toggleIcon = <FontAwesomeIcon icon={faCircle} />
  }

  let categoryIcon = ''

  if (todo.category === 'neutral') {
    categoryIcon = <FontAwesomeIcon icon={faFaceMeh} />
  } else if (todo.category === 'joyful') {
    categoryIcon = <FontAwesomeIcon icon={faFaceGrinBeam} />
  } else if (todo.category === 'funny') {
    categoryIcon = <FontAwesomeIcon icon={faFaceGrinSquintTears} />
  } else if (todo.category === 'boring') {
    categoryIcon = <FontAwesomeIcon icon={faFaceDizzy} />
  } else if (todo.category === 'hard') {
    categoryIcon = <FontAwesomeIcon icon={faFaceFlushed} />
  }

  const onDeleteTodo = () => {
    dispatch(todos.actions.deleteTodo(id))
    setIsUndoDisabled(false)
  }

  const onToggleChange = () => {
    dispatch(todos.actions.toggleTodo(id))
  }

  useEffect(() => {
    if (todo.deadline < Date.now() && !todo.completed) {
      setIsOverdue({ color: "red" })
    }
  }, [todo.deadline, todo.completed])

  const dateTimestamp = (new Date(todo.timestamp))
  const formattedTimestamp = formatDistanceToNow(dateTimestamp, { addSuffix: true })

  const formatRelativeLocale = {
    lastWeek: "'was due last' eeee",
    yesterday: "'was due yesterday'",
    today: "'due today'",
    tomorrow: "'due tomorrow'",
    nextWeek: "'due next' eeee",
    other: "'due' dd.MM.yyyy",
  }

  const locale = {
    ...enGB,
    formatRelative: (token) => formatRelativeLocale[token],
  }

  const dateDeadline = (new Date(todo.deadline))
  const formattedDeadline = formatRelative(dateDeadline, new Date(), { locale })

  return (
    <TodoArticle>
      <TodoDeadline style={isOverdue}>{todo.deadline !== null && formattedDeadline}</TodoDeadline>
      <TodoMiddleBox>
        <TodoDragBox aria-label="dragging handle for sorting" className="handle">
          <TodoDragIcon icon={faBars} />
          <TodoCategoryIcon>{categoryIcon}</TodoCategoryIcon>
        </TodoDragBox>
        <TodoToggleBox
          aria-label="toggle task status"
          className="custom-checkbox"
          onChange={onToggleChange}
          style={toggleStyle}>
          <input type="checkbox" />
          <TodoToggleIcon>{toggleIcon}</TodoToggleIcon>
          <TodoText>{todo.text}</TodoText>
        </TodoToggleBox>
        <TodoDeleteButton
          aria-label="delete task"
          onClick={onDeleteTodo}
          type="button">
          <FontAwesomeIcon icon={faTrashCan} />
        </TodoDeleteButton>
      </TodoMiddleBox>
      <TodoTimestamp>created {formattedTimestamp}</TodoTimestamp>
    </TodoArticle>
  )
}

export default Todo
