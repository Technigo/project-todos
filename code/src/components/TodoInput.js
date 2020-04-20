import React from "react";
import styled from 'styled-components'

const Form = styled.form`
margin: 8px;
display: flex;
flex: column;

  input {
    font-size: 22px;
    width: 40%;
  }
`

export const TodoInput = () => {
  return <Form>
    <input
      type="text"
    ></input>
  </Form>
}