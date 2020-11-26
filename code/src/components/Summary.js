import React from 'react'
import { useSelector } from 'react-redux'

import { Container, SummaryContainer } from 'lib/Container'
import { Icon } from 'lib/Icon'
import { Title, Subtitle, H3 } from 'lib/Text'

export const Summary = () => {
  const items = useSelector((state) => state.remember.items)
  const toDo = items.filter((item) => item.done !== true)

  return (
    <Container background="papayawhip">
      <SummaryContainer background="#fff">
        <Title><Icon />Remember</Title>
      </SummaryContainer>
      <SummaryContainer background="#5692ff">
        <Subtitle>{items.length} Total</Subtitle>
        <H3>{toDo.length} more to go</H3>
      </SummaryContainer>
    </Container>
  )
}