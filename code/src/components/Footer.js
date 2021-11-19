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

const Text = styled.p`
  margin: 20px 0 0 0;
  color: grey;
`

const Github = styled.a`
  text-decoration: none;
  margin: 5px 2px;
  border-radius: 50%;
  font-size: 18px;
  color: orange;
  &:hover {
    color: #ffc800;
  }
`

const Footer = () => {
  return (
    <>
      <FooterBox>
        <Text>
          Developed and Designed by Pinar Demirel 2021{" "}
          <Github href="https://github.com/pdetli" target="blank">
            <i className="fa fa-github"></i>
          </Github>
        </Text>
      </FooterBox>
    </>
  )
}

export default Footer
