import React from 'react'
import { useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

const RemoveButton = styled.button`
background: #E66032;
color: #F5F0D7;
border: none;
height: 30px;
width: 100px;
border-radius: 7px;
font-size: 16px;
margin-top: 10px;

&:hover {
  background: #ED839D;
}
`

export const RemoveAll = () => {
  const dispatch = useDispatch()
  return (
    <Wrapper>
      <RemoveButton
        background='#e45e69'
        onClick={() => {
          dispatch(todos.actions.removeAll())
        }}
      >
        Remove All
    </RemoveButton>
    </Wrapper>
  )
}