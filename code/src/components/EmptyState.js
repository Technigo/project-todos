import React from 'react'
import styled from 'styled-components'

import { GiPartyPopper } from "react-icons/gi";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
  color: #757575;
`
const Heading = styled.h1`
  margin: 0;
  margin-top: 10px;
`

export const EmptyState = () => {
  return (
    <Wrapper>
      <GiPartyPopper size={100} color="#48cc94" />
      <Heading>Woho!</Heading>
      <p>You have no tasks on your todo.</p>
    </Wrapper>
  )
}