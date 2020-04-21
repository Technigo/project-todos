import React from 'react'
import styled from 'styled-components/macro'

export let DateTimeNow = () => {
  let today = new Date();

  return (
    <HeaderDate>
      {today.toDateString()}
    </HeaderDate>
  )
}

const HeaderDate = styled.section`
  font-size: 40px;
  color: grey;
  font-family: 'Manrope', sans-serif;
  margin-left: 10%;
`

