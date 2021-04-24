import React from "react"
import styled from "styled-components"

//Styled component
const StyledFooter = styled.div`
  color: #2C2E73;
  font-family: "WrittenLies";
  font-size: 12px;
  margin-top: 30px;
  text-align: center;
  width: 90%;
  @media (min-width: 420px) {
    width: 100%;
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <p>Font made from <a href="http://www.onlinewebfonts.com">oNline Web Fonts</a>is licensed by CC BY 3.0</p>
    </StyledFooter>
  )
}

export default Footer