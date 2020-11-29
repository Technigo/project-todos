import React from "react"
import styled from "styled-components"


export const Header = () => {

  return (
    <TitleContainer>
      <Title>Todo List</Title>
    </TitleContainer>
  )
}

// --- STYLED COMPONENTS ---

const TitleContainer = styled.div`
  display: flex;
  justify-content: left;
`

const Title = styled.h1`
  color: #323E40;
  font-size: 28px;
  margin: 6% 0 0 0;
  border-bottom: 2px dashed #323E40;

  //-- tablet --
  @media (min-width: 677px) {
    font-size: 36px;
    margin: 12% 0 0 0;
  }

  //-- desktop --
  @media (min-width: 1024px) {
    font-size: 42px;
    margin: 15% 0 0 0;
  }

`