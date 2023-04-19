import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import tasks from 'reducers/list'

const ToDo = () => {
  const todoList = useSelector((store) => store.todos.items)

  const dispatch = useDispatch()

  const onToggleTodo = (todoId) => {
    dispatch(todos.actions.toggleItem(todoId))
  }

  const onDeleteTodo = (index) => {
    dispatch(todos.actions.deleteItem(index))
}

return (

)
}