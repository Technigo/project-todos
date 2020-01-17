import React from "react"
import { useSelector } from 'react-redux'
import styled from 'styled-components'


export const NumberOfTasks = () => {
  const number = useSelector(store => store.tasks.items)
  const countUncompleted = number.filter(item => item.complete)

  return (
    <Number>{countUncompleted.length}/{number.length} tasks </Number>
  )
}

const Number = styled.h4`
  font-family: 'Roboto', sans-serif;;
  font-weight:500;
  font-size: 13px;
  color: black;
  margin: 2px;
`

 // count length of the array with tasks.
