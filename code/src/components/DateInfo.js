import React from 'react'

import { Text } from '../styledComponents/texts'

export const DateInfo = () => {
  const todaysDate = new Date()
  const todaysDateString = todaysDate.toLocaleDateString()
  
  return (
    <Text>{todaysDateString}</Text>
  )
} 