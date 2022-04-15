import React, { useState } from 'react'

import AddTodo from './AddTodo'
import Header from './Header'
import TodosList from './TodosList'
import Actions from './Actions'
import Footer from './Footer'

const Main = () => {

  const [isUndoDisabled, setIsUndoDisabled] = useState(true)
  const [inputSearch, setInputSearch] = useState('')

  return (
    <main>
      <Header />
      <AddTodo setInputSearch={setInputSearch} />
      <TodosList inputSearch={inputSearch} setInputSearch={setInputSearch} setIsUndoDisabled={setIsUndoDisabled} />
      <Actions setInputSearch={setInputSearch} isUndoDisabled={isUndoDisabled} setIsUndoDisabled={setIsUndoDisabled} />
      <Footer />
    </main>
  )
}

export default Main
