import React from 'react'
import styled from 'styled-components'

export const TodoContainer = styled.div`
  width: 400px;
  height: 600px;
  display: flex;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  flex-direction: column;
  padding: 20px;
`
export const StyledCheckBox = styled.input`
  appearance: none;
  background-color: #fff;
  margin: 0;
  font: inherit;
  color: black;
  width: 2em;
  height: 2em;
  border: 0.15em solid #edac5f;
  border-radius: 1em;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;
  &::before {
    content: '';
    width: 1.3em;
    height: 1.3em;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em #edac5f;
  }
  &:checked::before {
    transform: scale(1);
  }
`
export const TodoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  > * {
    display: flex;
    flex-direction: row;
    align-items: center;
    > * {
      margin: 10px;
    }
  }
`

export const AddTaskButton = styled.button`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px 0 0;
  width: 50px;
  height: 50px;
  padding: 20px;
  color: blue;
  border: none;
`
