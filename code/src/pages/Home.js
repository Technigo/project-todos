import React from 'react';
import { List } from '../components/List'
import { Input } from '../components/Input'
import { Summary } from '../components/Summary'
import { Header } from '../components/Header'
import { DateInfo } from '../components/DateInfo'

import { TopContainer, MainContainer } from '../styledComponents/containers'

export const Home = () => {
  return(
    <MainContainer>
      <Header />
      <TopContainer>
        <DateInfo />
        <Summary />
      </TopContainer>
      <List />
      <Input />
    </MainContainer>
  )
}