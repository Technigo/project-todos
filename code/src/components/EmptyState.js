import React from 'react'
import styled from 'styled-components/macro'
import checklist from '../assets/checklist.jpg'

const EmptyContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%
`

const Image = styled.img`
  width: 70%;
  height: auto;
  margin: 50px 0 0 0;
  border-radius: 10px;

  @media (min-width: 768px) {
    margin-top: 100px;
  }

  @media (min-width: 1024px) {
    width: 30%;
    margin-top: 50px;
  }
`
const Caption = styled.p`
  margin: 2px 0 20px 0;
  font-size: 0.5em;
  color: #3e3e2d;
`

const Link = styled.a`
  color: #888d64;
  font-weight: bold;
  text-decoration: none;
`

const Text = styled.p`
  margin: 2px 0;
  font-size: 0.7em;
  color: #3e3e2d;

  @media (min-width: 768px) {
    font-size: 1em;
  }
`

export const EmptyState = () => {
  return (
    <EmptyContainer>

      <Image src={checklist} alt="Illustrated checklist with people around it" />

      <Caption>Image by <Link href="https://www.freepik.com/free-photos-vectors/circle">pikisyperstar</Link> from <Link href="https://www.freepik.com/">freepik</Link></Caption>

      <Text>What do you want to do today?</Text>

      <Text>Start adding tasks to your todo list.</Text>

    </EmptyContainer>
  )
}