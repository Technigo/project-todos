import React from 'react'
import { useDispatch } from 'react-redux'

import { tasks } from '../Reducers/tasks'

import { Button } from '../library/Button'

export const Item = ({ item }) => {
  const dispatch = useDispatch()

  return (
    <li>
      {item.text}
      <Button
        onClick={() => dispatch(tasks.actions.removeItem({ id: item.id }))} /* item here is the prop referring to taskInfo*/
      >
        -
      </Button>
    </li>
  )
}
