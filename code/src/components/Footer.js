import React from 'react'
import { TasksDone } from 'components/TasksDone'
import styled from 'styled-components'

export const Footer = () => {

  return (
    <FooterContainer>
      <TasksDone />
    </FooterContainer>
  )

}


const FooterContainer = styled.footer`
background-color:#C8B8DB;
color: #fff;
font-family: Manrope;
font-size: 16px;
font-weight: bold;
`