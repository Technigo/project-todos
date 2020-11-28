import React from 'react'

import { Text } from '../styledComponents/texts'
import { EmptyListContainer } from '../styledComponents/containers'

export const EmptyList = () => {
  return (
    <EmptyListContainer>
      <Text>No to-dos yet!</Text>
    </EmptyListContainer>
  )
}