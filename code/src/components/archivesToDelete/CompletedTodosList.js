import React, { useEffect, useState } from "react"
import { useSelector } from 'react-redux'
import Sortable from "sortablejs"

import Todo from '../Todo'

const CompletedTodosList = () => {
  const allTodos = useSelector((store) => store.todos.items)
  const completedTodos = allTodos.filter(todo => todo.completed)

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

  const [inputSearch, setInputSearch] = useState('')
  const filteredTestSearch = completedTodos.filter(todo => todo.text.toLowerCase().includes(inputSearch.toLowerCase()))

  const testSearch = (event) => {
    setInputSearch(event.target.value)
  }

  // is value={inputSearch} doing something in input?

  return (
    <>
      <div>
        <label>Search a task:
          <input type="search" name="q" onChange={testSearch} value={inputSearch} />
        </label>
        {/* <button>Search</button> */}
      </div>
      <div ref={(el) => setDroppable(el)}>
        {filteredTestSearch.reverse().map((todo) => (
          <Todo key={todo.id} todo={todo} id={todo.id} />
        ))}
      </div>
      <p>Completed tasks: {completedTodos.length}/{allTodos.length}</p>
    </>
  )
}

export default CompletedTodosList
