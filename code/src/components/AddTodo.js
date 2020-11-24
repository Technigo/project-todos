import React, { useState } from "react"

import { useDispatch } from "react-redux"
import { todoTasks } from "reducer/todoTasks"

export const AddTodo = () => {
  //  TODO:
  //  on enter/onClick dispatch the data to todoTasks reducer
  //id = timestamp and complete = false by default
  const [id, setId] = useState(Date.now())
  const [text, setText] = useState("")
  const [complete, setComplete] = useState(false)


  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(todoTasks.actions.addTask({ id, text, complete }))
    //not sure
    setId(Date.now())
    setText("")
    // not sure
    setComplete()
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <button type="submit">+</button>
        <label>
          {/* on enter dispatch the data to todoTasks reducer */}
          <input
            type="text"
            value={text}
            placeholder="Add your to-do here ..."
            onChange={(event) => setText(event.target.value)}
          />
        </label>
      </form>
    </section>
  )
}
