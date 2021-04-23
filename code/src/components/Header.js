import React from "react"
import styled from "styled-components"

//Styled components
const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  color: #2C2E73;
  width: 100%;
  text-align: center;
  font-family: "WrittenLies";
  `

  const Title = styled.h1`
  border-bottom: solid #2C2E73;
  border-width: 0px 0px 2px 0px;
  border-radius: 0% 0% 100% 0%/2% 0% 6% 0%;
  transform: rotate(2deg);
  width: 100px;
`

const Header = () => {
  return (
    <StyledHeader>
      <Title>ToDo!</Title>
    </StyledHeader>
  )
}

export default Header