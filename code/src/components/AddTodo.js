import React, { useState } from "react"
import styled from "styled-components"

import { useDispatch } from "react-redux"
import { todoTasks } from "reducer/todoTasks"

export const AddTodo = () => {

  //local state property -> will be used only in this component
  const [value, setValue] = useState("")

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(todoTasks.actions.addTask(value))
    setValue("")
  }

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Button type="submit">+</Button>
        <label>
          {/* on enter dispatch the data to todoTasks reducer */}
          <input
            type="text"
            value={value}
            placeholder="Add your to-do here ..."
            onChange={(event) => setValue(event.target.value)}
          />
        </label>
      </Form>
    </section>
  )
}

const Form = styled.form`
margin: 10px 0;

`
const Button = styled.button`
  cursor: pointer;
` 