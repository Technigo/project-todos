import React from "react"
import styled from "styled-components";

const AddContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background: grey;
  padding: 100px 0;
`

const AddButton = styled.button`
  font-size: 24px;
  justify-content: center;
  border: none;
  border-radius: 25px;
  padding: 15px;
`

export const AddBook = () => {
  return (
    <AddContainer>
      <AddButton>Add book</AddButton>
    </AddContainer>
  )
}