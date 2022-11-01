/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components'

const NewTodo = () => {
  return (
    <ToDoWrapper>
      <form>
        <label htmlFor="new-todo"> New to-do </label>
        <input type="text" name="new-todo" />
      </form>
    </ToDoWrapper>
  )
}

export default NewTodo

const ToDoWrapper = styled.section`
    background-color: #f2e2c8;
    padding: 10px;
`