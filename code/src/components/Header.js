import React from 'react'
import styled from 'styled-components'

export const Header = () => {

  let date = new Date()
  let day = date.getDate()
  const month = date.toLocaleString('default', { month: 'long' })

  return (

    <WrapperHeader>
      <InnerWrapper>
        <Heading>Todo</Heading>
        <Text>{day} {month}</Text>
      </InnerWrapper>
      <InnerWrapper>
        <Text>2/4 done</Text>
        <ClearButton>Clear all</ClearButton>
      </InnerWrapper>
    </WrapperHeader>

  )

}

const WrapperHeader = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #B0BBC0;
  padding: 10px 20px;
  font-weight: 700;
`
const InnerWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Heading = styled.p`
  font-size: 20px;
  margin-bottom: 5px;
  color: #333;
`
const Text = styled.p`
  font-size: 12px;
  color: #666;
`
const ClearButton = styled.button`
  background: #264653;
  color: #fff;
  font-size: 12px;
  padding: 5px 10px;
  border-radius: 10px;
  border: none;
`