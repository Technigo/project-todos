/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'

const TodoItem = ({ todo, index, onDelete, onDone }) => {
  return (
    <div>
      <button
        onClick={() => onDone(todo.id)}
        key={todo.id}
        isDone={todo.isDone}>
        <TodoText>{todo.text}</TodoText>
        <DateString>Added {moment(todo.createdAt).format('HH:mm on D MMM YYYY')}</DateString>
      </section>
      <button
        onClick={() => onDelete(index)}
        type="button"
        title="Delete task">X
      </button>
    </div>
  )
}
export default TodoItem