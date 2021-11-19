import React from 'react'
import { useDispatch } from 'react-redux'
// import styled from 'styled-components'

import { todos } from 'reducers/todos'

export const FilterCategory = () => {
  const dispatch = useDispatch()

  const categories = ['all', 'business', 'personal', 'shopping']

  return (
    <div>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => dispatch(todos.actions.changeFilter(category))}>
          {category}
        </button>
      ))}
    </div>
  )
}
