import React from 'react'
import { useSelector } from 'react-redux'
import FlipMove from "react-flip-move"
import TodoItem from 'components/TodoItem'

const TodoList = () => {
  const items = useSelector((store) => store.todos.items)

  return (
    <section className="todo-container">
      <FlipMove duration={250} easing="ease-out">
      {items.map((todo) => {
        return (
          <div key={todo.id}>
            <TodoItem
              checked={todo.isComplete}
              id={todo.id}
              text={todo.description}
            />
          </div>
        )})
      }
      </FlipMove>
    </section>
  )
}

export default TodoList