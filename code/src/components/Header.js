import React from "react"
import styled from "styled-components"


//counting the number of all todos
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
  margin: 0;
  border-bottom: 2px dashed #323E40;

  @media (min-width: 1024px) {
    font-size: 36px;
  }

`