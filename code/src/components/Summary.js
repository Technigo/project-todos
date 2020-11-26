import React from 'react';
import { useSelector } from 'react-redux'

import { Text } from '../styledComponents/texts'

export const Summary = () => {
  const list = useSelector((store) => store.todos.list)

  const numOfCompleted = list.todoItems.filter(item => item.done).length

  return (
    <div>
      <Text>{numOfCompleted}/{list.todoItems.length} completed</Text>
    </div>
  )
}