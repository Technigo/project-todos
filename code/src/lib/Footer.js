import React from 'react'
import styled from 'styled-components/macro'


export const Footer = () => {
  return (
    <FooterSection><a href="https://github.com/annesophiegendron/project-todos" target="_blank">Anne-Sophie Gendron</a> - Technigo project April 2020</FooterSection>
  )
}

const FooterSection = styled.section`
  display: flex;
  justify-content: center;
  font-family: 'Manrope', sans-serif;
  font-size: 12px;
  padding: 10px;
`