import React from "react"
import moment from 'moment'
import styled from 'styled-components'


export const Date = () => {

  return (
    <Dateview>{moment().format('MMMM Do')}</Dateview>
  )
}

const Dateview = styled.h4`
  font-family: 'Roboto', sans-serif;;
  font-weight:500;
  font-size: 13px;
  color: black;
  margin: 2px;
`