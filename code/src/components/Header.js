import React from "react"
import styled from "styled-components"

const StyledHeader = styled.div`
  background-color: #2C2E73;
  color: #ffffff;
  width: 100%;
  text-align: center;
  font-family: "WrittenLies"
`

const Header = () => {

  return (
    <StyledHeader>
      <h1>ToDo!</h1>
    </StyledHeader>
  )
}

export default Header