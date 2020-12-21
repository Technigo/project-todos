import React from 'react'
import { useSelector } from 'react-redux'

import { Text } from '../styledComponents/texts'

export const Summary = () => {
  const list = useSelector((store) => store.todos.list.todoItems)

  const numOfCompleted = list.filter(item => item.done).length
   
  return (
    <Text>{numOfCompleted}/{list.length} done</Text>
  )
}