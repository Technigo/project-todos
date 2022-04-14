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
    if (todo.category === 'neutral') {
      return <FontAwesomeIcon icon={faFaceMeh} />
    } else if (todo.category === 'joyful') {
      return <FontAwesomeIcon icon={faFaceGrinBeam} />
    } else if (todo.category === 'funny') {
      return <FontAwesomeIcon icon={faFaceGrinSquintTears} />
    } else if (todo.category === 'boring') {
      return <FontAwesomeIcon icon={faFaceDizzy} />
    } else if (todo.category === 'hard') {
      return <FontAwesomeIcon icon={faFaceFlushed} />
    }
  }

  const onDeleteTodo = () => {
    dispatch(todos.actions.deleteTodo(id))
    setIsUndoDisabled(false)
  }

  const onCompletedChange = () => {
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
        <TodoDragBox className="handle">
          <TodoDragIcon icon={faBars} />
          <TodoCategoryIcon>{categoryIcon()}</TodoCategoryIcon>
        </TodoDragBox>
        <TodoToggleBox
          className="custom-checkbox"
          onChange={onCompletedChange}
          style={isDone()}>
          <input type="checkbox" />
          <TodoToggleIcon>{onToggle()}</TodoToggleIcon>
          <TodoText>{todo.text}</TodoText>
        </TodoToggleBox>
        <TodoDeleteButton onClick={onDeleteTodo} type="button">
          <FontAwesomeIcon icon={faTrashCan} />
        </TodoDeleteButton>
      </TodoMiddleBox>
      <TodoTimestamp>created {formattedTimestamp}</TodoTimestamp>
    </TodoArticle>
  )
}

export default Todo
