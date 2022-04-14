import React, { useState } from 'react'

import AddTodo from './AddTodo'
import Header from './Header'
import TodosList from './TodosList'
import TodosActions from './TodosActions'
import Footer from './Footer'

const Main = () => {

  const [isUndoDisabled, setIsUndoDisabled] = useState(true)

  return (
    <main>
      <Header />
      <AddTodo />
      <TodosList setIsUndoDisabled={setIsUndoDisabled} />
      <TodosActions isUndoDisabled={isUndoDisabled} setIsUndoDisabled={setIsUndoDisabled} />
      <Footer />
    </main>
  )
}

export default Main
