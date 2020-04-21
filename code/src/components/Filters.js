import React from 'react'
import styled from 'styled-components/macro'
import { useDispatch, useSelector } from 'react-redux'
import { todos } from '../reducers/todos'
import { Button } from '../lib/Button'

const FilterWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  width: 90%;
  margin: 0 auto;
`

export const Filter = () => {
  const itemsLength = useSelector(store => store.todos.items.length)

  const dispatch = useDispatch()

  //Functions filtering active, done and all todos
  const showActive = () => dispatch(todos.actions.showActive())
  const showDone = () => dispatch(todos.actions.showDone())
  const showAll = () => dispatch(todos.actions.showAll())

  return (
    <>
      {itemsLength > 0 &&
        <FilterWrapper>

          <Button
            aria-label='Show active tasks'
            onClick={showActive}
            width={'100%'}
            margin={'5px auto'}
          >Active</Button>

          <Button
            aria-label='Show done tasks'
            onClick={showDone}
            width={'100%'}
            margin={'5px auto'}
          >Done</Button>

          <Button
            aria-label='Show all tasks'
            onClick={showAll}
            width={'100%'}
            margin={'5px auto'}
          >All</Button>

        </FilterWrapper>
      }
    </>
  )
}