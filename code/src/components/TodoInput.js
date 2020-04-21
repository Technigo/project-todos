import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'
import { Container } from 'lib/Container'
import styled from 'styled-components'
import { Button } from 'lib/Button'

const TextInput = styled.input`
width: 70%;
font-size: 18px;
margin-right: 5px;
`

export const TodoInput = () => {
  return (
    <Container>
      <form>
        <label>
          <TextInput
            type='text'
            value={''}
            onChange={''}
          />
        </label>
        <Button background='blue'>Add todo</Button>
      </form>
    </Container>
  )
}