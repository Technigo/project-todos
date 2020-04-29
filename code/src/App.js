import React from 'react'
import { Header } from './components/Header'
import { Input } from './components/Input'
import { Tasks } from './components/Tasks'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTasks, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faTasks, faCheckCircle)

export const App = () => {
  return (
    <>
      <Header />
      <Input />
      <Tasks />
    </>
  )
}
