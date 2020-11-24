import React from 'react';
import { List } from '../components/List'
import { Input } from '../components/Input'
import { Summary } from '../components/Summary'

export const Home = () => {
  return(
    <main>
      <Input />
      <List />
      <Summary />
    </main>
  )
}