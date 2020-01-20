import React from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'
import styled from 'styled-components'

export const ClearButton = () => {
  const dispatch = useDispatch()

  return (
    <ButtonWrapper>
      <Clear type="button" onClick={() => dispatch(tasks.actions.removeAll())}>
        Clear
      </Clear>
    </ButtonWrapper>
  )
}

const Clear = styled.button`
  box-shadow: 1px 1px 2px black;
  border: none;
  border-radius: 5px;
  background-color: #001aff;
  color: rgb(209, 198, 235);
  width: 60px;
  height: 25px;
  margin: 10px 0px;
  font-size: 13px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: ease-in-out 100ms;
  &:hover {
    opacity: 0.7;
  }
`

const ButtonWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
