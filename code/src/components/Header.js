import React from "react"
import styled from "styled-components"


//counting the number of all todos
export const Header = () => {

  return (
    <div>
      <Title>Todo list</Title>
    </div>
  )

}

const Title = styled.h1`
  color: #025959;
  font-size: 20px;
  margin: 0;

`