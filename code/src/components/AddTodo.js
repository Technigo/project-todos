import React from 'react'
import styled from 'styled-components'


const Form = styled.form`
  display: flex;
  justify-content: center;
  height: 40px;
  align-items: center;
  margin: 10px 20px;
  background-color: #fff;
  padding: 10px;
  box-shadow: 10px 10px 30px #bcbdbe;
 `

const Input = styled.input`
  width: 180px;
  padding: 5px;
`

const SubmitButton = styled.button`
  width: 50px;
  padding: 5px;
`

const AddTodo = () => {
  
  return (
    <Form>
      <Input placeholder='Enter new task' />
      <SubmitButton type='submit'>+ Add</SubmitButton>
    </Form>
  )
}

export default AddTodo 