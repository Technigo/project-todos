import React from 'react'
import styled from 'styled-components'

const TopHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #F4F4F4;
  font-family: 'Montserrat', sans-serif;
  border-bottom: 1px solid #A9A4A6;
` 

const ListInfo = styled.div`
  display: flex;
  flex-direction: column;
`

const ListHeading = styled.h2`
  margin: 0;
`

const ClearBtn = styled.button`
  border-radius: 8px;
  background-color: #8B98F9;
  color: #fff;
  border: none;
  padding: 5px;
`

const Span = styled.span`
  text-align: right;
`


const Header = () => {
  
  return (
    <TopHeader>
      <ListInfo>
        <ListHeading>To do</ListHeading>
      </ListInfo>
      <ListInfo>
        <Span>4 tasks</Span>
        <ClearBtn className="clear-btn" type="button">CLEAR ALL</ClearBtn>
      </ListInfo>
    </TopHeader>
  )
}

export default Header