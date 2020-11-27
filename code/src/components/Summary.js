import React from 'react'
import { useSelector } from 'react-redux'

import { Container, RoundedContainer } from 'lib/Container'
import { Icon } from 'lib/Icon'
import { Title, Subtitle, H3 } from 'lib/Text'

export const Summary = () => {
  const items = useSelector((state) => state.remember.items)
  const toDo = items.filter((item) => item.done !== true)

  return (
    <RoundedContainer>
      <RoundedContainer background="papayawhip">
        <Title><Icon />Remember</Title>
      </RoundedContainer>
      <Container background="#5692ff">
        <Subtitle>{items.length} Total</Subtitle>
        <H3>{toDo.length} more to go</H3>
      </Container>
    </RoundedContainer>
  )
}