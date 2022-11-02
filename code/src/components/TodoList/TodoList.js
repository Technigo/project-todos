/* eslint-disable linebreak-style */
import React from 'react'
import { useSelector } from 'react-redux'
import { EmptyList } from 'components/EmptyList/EmptyList'
import { Todo } from 'components/Todo/Todo'
import { AddNewTask } from 'components/AddNewTask/AddNewTask'

export const TodoList = () => {
  const myTodos = useSelector((store) => store.todos.tasks)
  console.log('mytodos', myTodos)
  const emptyList = useSelector((store) => store.todos.isEmpty)
  console.log('empty?', emptyList)

  return (
    <section>
      <AddNewTask />
      <h2>My Todos</h2>

      <form className="todo-list">
        {myTodos.map((task) => {
          return (
            <Todo
              task={task}
              key={task.id} />
          )
        })}
      </form>

      {emptyList && <EmptyList />}

    </section>
  )
}