import React, { useEffect, useState } from "react"
import { useSelector } from 'react-redux'
import Sortable from "sortablejs"

import { Todo } from './Todo'

export const NotCompletedTodosList = () => {
  const allTodos = useSelector((store) => store.todos.items)
  const notCompletedTodos = allTodos.filter(todo => !todo.completed)

  const [droppable, setDroppable] = useState(null)

  useEffect(() => {
    if (droppable) {
      Sortable.create(droppable, {
        easing: "cubic-bezier(0.2, 0, 0, 1)",
        animation: 150,
        // className: "container",
        ghostClass: "dragging",
        // scrollFn: function (offset) {
        //   console.log("i'm here scrolling", offset);
        //   return false;
        // },
        scroll: true,
        scrollSensitivity: 100,
        bubbleScroll: true
      })
    }
  }, [droppable])

  return (
    <>
      <div ref={(el) => setDroppable(el)}>
        {notCompletedTodos.map((todo) => (
          <Todo key={todo.id} todo={todo} id={todo.id} />
        ))}
      </div>
      <p>Not completed tasks: {notCompletedTodos.length}/{allTodos.length}</p>

    </>
  )
}
