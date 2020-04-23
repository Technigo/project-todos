import React from 'react'
import { TasksDone } from 'components/TasksDone'
import { DeleteAll } from 'components/DeleteAll'
import styled from 'styled-components'

export const Footer = () => {

  return (
    <FooterContainer>
      <TasksDone />
      <DeleteAll />
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 20px 0 20px 0;
  background-color:#C8B8DB;
  color: #fff;
  font-family: Manrope;
  font-size: 16px;
`