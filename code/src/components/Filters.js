import React from 'react'
import styled from 'styled-components/macro'
import { useDispatch, useSelector } from 'react-redux'
import { todos } from '../reducers/todos'
import { Button } from '../lib/Button'

export const Filter = () => {
  const dispatch = useDispatch()

  const itemsLength = useSelector(store => store.todos.items.length)

  const showActive = () => {
    dispatch(todos.actions.showActive())
  }

  const showDone = () => {
    dispatch(todos.actions.showDone())
  }
  const showAll = () => {
    dispatch(todos.actions.showAll())
  }

  return (
    <>
      {itemsLength > 0 &&
        <FilterWrapper>
          <Button onClick={showActive} width={'100%'} margin={'5px auto'}>Active</Button>
          <Button onClick={showDone} width={'100%'} margin={'5px auto'}>Done</Button>
          <Button onClick={showAll} width={'100%'} margin={'5px auto'}>All</Button>
        </FilterWrapper>
      }
    </>
  )
}

const FilterWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  width: 90%;
  margin: 0 auto;
`