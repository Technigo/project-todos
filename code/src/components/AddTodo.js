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
        <Button type="submit">
          <span role="img"
            aria-label="plus-sign">
            ➕
          </span>
        </Button>
        <label>
          <Input
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
margin: 25px 0;

`
const Button = styled.button`
  cursor: pointer;
  margin-right: 8px;
  padding: 7px;
  border-radius: 50%;
  border: 1px solid #819FA6;
  background: #F2F2EB;
  outline: none;
`

const Input = styled.input`
  border: none;
  border-bottom: 2px solid #819FA6;
  outline: none;
` 