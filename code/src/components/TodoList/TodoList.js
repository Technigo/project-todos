/* eslint-disable linebreak-style */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { todos } from 'reducers/todos'
import { EmptyList } from 'components/EmptyList/EmptyList'
import { Todo } from 'components/Todo/Todo'
import { ClearCompleteBtn, TodoListContainer } from './TodoList.styles'

export const TodoList = () => {
  const dispatch = useDispatch()

  const allTodos = useSelector((store) => store.todos.tasks)
  const completeTodos = useSelector((store) => store.todos.tasks.filter((t) => t.complete === true))
  const doTodos = useSelector((store) => store.todos.tasks.filter((t) => t.complete === false))
  const emptyList = useSelector((store) => store.todos.isEmpty)

  // deletes all tasks from list
  const clearAllTodos = () => {
    dispatch(todos.actions.clearAll())
  }

  // sets all task as completed
  const setAllComplete = (taskId) => {
    dispatch(todos.actions.setComplete(doTodos[taskId]))
  }

  // Show either empty page or list of todos
  if (emptyList) {
    return (
      <EmptyList />
    )
  } else {
    return (
      <TodoListContainer>

        {/* Shows all tasks that has not been completed */}
        <ClearCompleteBtn
          onClick={setAllComplete}>Check all
        </ClearCompleteBtn>
        <h2>To do <span>{doTodos.length}/{allTodos.length}</span></h2>
        {doTodos.map((task) => {
          return (
            <Todo
              task={task}
              key={task.id} />
          )
        })}
        {/* Shows all tasks checked as completed */}
        <h2>Completed <span>{completeTodos.length}/{allTodos.length}</span></h2>
        {completeTodos.map((task) => {
          return (
            <Todo
              task={task}
              key={task.id} />
          )
        })}

        <ClearCompleteBtn onClick={clearAllTodos}>Clear all</ClearCompleteBtn>
      </TodoListContainer>

    )
  }
}