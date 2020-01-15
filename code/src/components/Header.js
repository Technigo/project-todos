import React from 'react'
import styled from 'styled-components'

export const Header = () => {

  let date = new Date()
  let day = date.getDate()
  const month = date.toLocaleString('default', { month: 'long' })

  return (

    <WrapperHeader>
      <WrapperLeft>
        <Heading>Todo</Heading>
        <Text>{day} {month}</Text>
      </WrapperLeft>
      <WrapperRight>
        <Text>2/4 done</Text>
        <ClearButton>Clear all</ClearButton>
      </WrapperRight>
    </WrapperHeader>

  )

}

const WrapperHeader = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #B0BBC0;
  padding: 5px 20px;
  font-weight: 700;
`
const WrapperLeft = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`
const WrapperRight = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`
const Heading = styled.p`
  font-size: 20px;
  margin: 5px 0;
  color: #333;
`
const Text = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #666;
`
const ClearButton = styled.button`
  background: #264653;
  color: #fff;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 300;
  padding: 5px;
  border-radius: 7px;
  border: none;
`