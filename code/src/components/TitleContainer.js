import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListUl, faCheck } from '@fortawesome/free-solid-svg-icons'

export const TitleContainer = () => {
  return (
    <TitleWrapper>
      <IconContainer>
        <FontAwesomeIcon
          aria-hidden='true'
          icon={faListUl} />
      </IconContainer>
      <Title>B. Productive
        <FontAwesomeIcon
          aria-hidden='true'
          icon={faCheck} />
      </Title>
    </TitleWrapper>
  )
}

const TitleWrapper = styled.section`
  display: grid;
  grid-template-columns: 40px 1fr;
  grid-gap: 10px;
  margin: 10px auto;
  padding-top: 15px;
  width: 90%;
`

const IconContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: #888d64;
  color: #fff;
  font-size: 1.5em;
`

const Title = styled.h1`
  height: 30px;
  margin: 0;
  padding: 5px 10px;
  border-radius: 10px;
  background: #f6f6ec;
  color: #b55136;
  font-family: 'Playfair Display';
  font-size: 1.5em;
  text-align: center;
`