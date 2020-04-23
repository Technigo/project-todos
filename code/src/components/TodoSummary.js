import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ClearButton } from 'lib/Button'
import { SummaryContainer } from 'lib/Container'
import { Form } from 'lib/Form'
import { todos } from '../reducers/todos'


export const TodoSummary = () => {
const list = useSelector(store => store.todos.list)
const numDone = list.items.filter(item => item.done).length
const dispatch = useDispatch()
const handleClick = () => {
  dispatch(todos.actions.clearAll())
}

  return (
  <SummaryContainer >
      <h2>
        {numDone}/{list.items.length} done
      </h2>
      <ClearButton onClick={handleClick}>Clear all</ClearButton>
      <Form> {list.items.length <= 0 ? <h3>Add something to do!</h3> : ''}</Form>
  </SummaryContainer>
  )
};