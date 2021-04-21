import React from 'react'
import { useSelector } from 'react-redux';

const TodoStudies = () => {
  const allTodos = useSelector((store) => store.todos)
  console.log(allTodos)
  const justStudiesTodos = allTodos.items.filter((item) => item.category === "Studies")
  console.log(justStudiesTodos)

  return (
    <>
      {justStudiesTodos.map(todo => (
        <div key={todo.id}>
          <p>{todo.category}</p>
        </div>
      ))}
    </>
  )
}

export default TodoStudies