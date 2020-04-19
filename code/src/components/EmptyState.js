import React from 'react'
import checklist from '../assets/checklist.jpg'
import styled from 'styled-components'

export const EmptyState = () => {
  return (
    <EmptyContainer>
      <Image src={checklist} alt="checklist with 4 people around it" />
      <Text>What do you want to do today?</Text>
      <Text>Start adding tasks to your todo list.</Text>
    </EmptyContainer>
  )
}

const EmptyContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%
`

const Image = styled.img`
  width: 100%;
  height: auto;
  margin: 10px 0 20px 0;
  border-radius: 10px;

  @media (min-width: 768px) {
    width: 70%;
    margin-top: 100px;
  }

  @media (min-width: 1024px) {
    width: 30%;
    margin-top: 20px;
  }
`

const Text = styled.p`
  margin: 2px 0;
  font-size: 0.7em;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1em;
  }
`