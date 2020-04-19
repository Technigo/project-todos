import React from 'react'
import checklist from '../assets/checklist.jpg'
import styled from 'styled-components'

export const EmptyState = () => {
  return (
    <>
      <Image src={checklist} alt="checklist with 4 people around it" />
      <Text>What do you want to do today?</Text>
      <Text>Start adding tasks to your todo list.</Text>
    </>
  )
}

const Image = styled.img`
  width: 100%;
  height: auto;
  margin: 10px 0 20px 0;
  border-radius: 10px;
`

const Text = styled.p`
  margin: 2px 0;
  font-size: 0.7em;
  text-align: center;
`