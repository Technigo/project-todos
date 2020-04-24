import React from 'react'
import { useDispatch } from 'react-redux'
import { todos } from '../reducers/todos'
import styled from 'styled-components'


export const CustomCheckbox = () => {

  const dispatch = useDispatch()

  const Checkbox = (props) => <input type='checkbox' {...props}></input>


  return (
    <div>
      <label>
        <Checkbox checked='checked'></Checkbox>
      </label>
    </div>
  )

}