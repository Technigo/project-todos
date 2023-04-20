/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { todos } from 'reducers/todo'
import { TodoItem } from 'components/TodoItem'
import { AddNewTodo } from 'components/AddNewTodo'

export const TodoCounter = () => {
  const dispatch = useDispatch()
  const allTodos = useSelector((store) => store.todos.items)

  const onDone = (id) => {
    dispatch(todos.actions.toggleItem(id))
  }

  const onDelete = (todoIndex) => {
    dispatch(todos.actions.deleteItem(todoIndex))
  }

  const todosTodo = allTodos.filter((todo) => !todo.isDone)
  const doneTodos = allTodos.filter((todo) => todo.isDone)

  return (
    <>
      <h2>To-do ({todosTodo.length})</h2>

      {todosTodo.length === 0 && (
        <p>No more tasks!🍀</p>
      )}

      {todosTodo.map((todo, index) => (<TodoItem
        todo={todo}
        index={index}
        key={todo.id}
        onDelete={onDelete}
        onDone={onDone} />))}

      <AddNewTodo />

      <h2>Done ({doneTodos.length})</h2>

      {doneTodos.map((todo, index) => (<TodoItem
        todo={todo}
        index={index}
        key={todo.id}
        onDelete={onDelete}
        onDone={onDone} />))}
    </>
  )
}

