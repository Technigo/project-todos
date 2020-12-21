import React from 'react'
import { useSelector } from 'react-redux'

import { Text } from '../styledComponents/texts'

export const Summary = () => {
  const list = useSelector((store) => store.todos.list.todoItems)

  const numOfCompleted = list.filter(item => item.done).length
  
  if(numOfCompleted === list.length && numOfCompleted > 0) {
    return (
      <Text>All done!</Text>
    )
  } else {
    return (
      <Text>{numOfCompleted}/{list.length} done</Text>
    )
  }
}