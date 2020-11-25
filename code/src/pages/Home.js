import React from 'react';
import { List } from '../components/List'
import { Input } from '../components/Input'
import { Summary } from '../components/Summary'
import { Header } from '../components/Header'
import { Date } from '../components/Date'

import { TopContainer, ListContainer } from '../styledComponents/containers'

export const Home = () => {
  return(
    <main>
      <Header />
      <TopContainer>
        <Date />
        <Summary />
      </TopContainer>
      <ListContainer>
        <List />
      </ListContainer>
      <section>
        <Input />
      </section>
    </main>
  )
}