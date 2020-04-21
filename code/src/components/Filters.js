import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { todos } from '../reducers/todos'
import { Button } from '../lib/Button'

export const Filter = () => {

  return (
    <FilterWrapper>
      <Button width={'100%'}>Active</Button>
      <Button width={'100%'}>Done</Button>
      <Button width={'100%'}>All</Button>
    </FilterWrapper>
  )
}

const FilterWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  width: 90%;
  margin: 0 auto;
`