import React from "react"
import styled from 'styled-components'

import { AddContainer } from "./AddContainer"
import { TaskContainer } from "./TaskContainer"

const StyledMain = styled.main`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`

export const Container = () => {
  return (
    <StyledMain>
      <AddContainer />
      <TaskContainer />
    </StyledMain>
  )
}