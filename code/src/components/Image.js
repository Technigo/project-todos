import React from 'react'
import styled from 'styled-components'

const StyledImg = styled.img`
  width: 300px;
  margin-bottom: 50px;

  @media (min-width: 1024px) {
    width: 500px;
  }

`

const Image = () => <StyledImg src='/assets/toDo.webp' alt='a woman with a task planner' />

export default Image
