import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListUl, faCheck } from '@fortawesome/free-solid-svg-icons'

export const TitleContainer = () => {
  return (
    <TitleWrapper>
      <IconContainer><FontAwesomeIcon icon={faListUl} /></IconContainer>
      <Title>B. Productive <FontAwesomeIcon icon={faCheck} /></Title>
    </TitleWrapper>
  )
}

const TitleWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 15px auto;
  padding-top: 15px;
  width: 90%;
`

const IconContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background: #888d64;
  color: #fff;
  font-size: 1.8em;
`

const Title = styled.h1`
  min-width: 75%;
  height: 40px;
  margin: 0;
  padding: 5px 10px;
  border-radius: 10px;
  background: #f6f6ec;
  color: #b55136;
  font-family: 'Playfair Display';
  font-size: 1.8em;
  text-align: center;

  @media (min-width: 768px) {
    width: 88%;
  }
`