import React from "react"
import styled from "styled-components"

const FooterBox = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 10px;
  color: black;
  padding: 10px;
`

// const CompletedTaskText = styled.p`
//   color: #ffbe00;
//   font-weight: bold;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `

const Footer = () => {
  return (
    <>
      <FooterBox>
        <p> Designed and Developed by Pinar Demirel </p>
      </FooterBox>
    </>
  )
}

export default Footer
