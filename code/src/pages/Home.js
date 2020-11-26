import React from 'react'
import { useSelector } from 'react-redux'

import { List } from '../components/List'
import { EmptyList } from '../components/EmptyList'
import { Input } from '../components/Input'
import { Summary } from '../components/Summary'
import { Header } from '../components/Header'
import { DateInfo } from '../components/DateInfo'
import { TopContainer, MainContainer } from '../styledComponents/containers'

export const Home = () => {
  const showList = useSelector((store) => store.todos.showList)
  console.log(showList)

  return(
    <MainContainer>
      <Header />
      <TopContainer>
        <DateInfo />
        <Summary />
      </TopContainer>
      <List />
      <EmptyList />
      <Input />
    </MainContainer>
  )
}