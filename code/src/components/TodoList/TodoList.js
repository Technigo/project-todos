/* eslint-disable linebreak-style */
import React from 'react'
import { useSelector } from 'react-redux'
import { EmptyList } from 'components/EmptyList/EmptyList'
import { Todo } from 'components/Todo/Todo'
import { TodoListContainer, TodosListWrapper } from './TodoList.styles'

export const TodoList = () => {
  const myTodos = useSelector((store) => store.todos.tasks)
  console.log('mytodos', myTodos)
  const emptyList = useSelector((store) => store.todos.isEmpty)
  console.log('empty?', emptyList)

  return (
    <TodoListContainer>
      <TodosListWrapper>
        <h2>To do</h2>
        {myTodos.map((task) => {
          return (
            <Todo
              task={task}
              key={task.id} />
          )
        })}
      </TodosListWrapper>

      {emptyList && <EmptyList />}

    </TodoListContainer>
  )
}