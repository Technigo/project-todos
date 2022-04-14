import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background-color: #3a3845;
  height: 150px;
`
const AlignP = styled.div`
  justify-content: flex-end;
`
const AlignText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 40px;
`
const HeaderText = styled.h1`
  align-self: start;
  margin: 5px 10px;
  font-family: 'Quicksand';
  color: #f7ccac;
  font-weight: 200;
  font-size: 40px;
`
const SmallHeaderText = styled.h2`
  align-self: start;
  margin: 5px 10px;
  color: #c69b7b;
  font-weight: 200;
  font-size: 15px;
`

const Header = () => {
  const items = useSelector((store) => store.todos.items)
  const completedListItems = items.filter((listItem) => listItem.isComplete)
  const uncompletedListItems = items.filter((listItem) => !listItem.isComplete)

  return (
    <HeaderWrapper>
      <AlignText>
        <HeaderText>Make it happen</HeaderText>
      </AlignText>
      <AlignP>
        <SmallHeaderText>
          Todo {uncompletedListItems.length} Completed{' '}
          {completedListItems.length}
        </SmallHeaderText>
      </AlignP>
    </HeaderWrapper>
  )
}

export default Header
