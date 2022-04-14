import React, {useState} from 'react'
// import { useSelector } from 'react-redux'

import AddTodo from './AddTodo'
import Footer from './Footer'
import Header from './Header'
import TodosActions from './TodosActions'
import TodosList from './TodosList'
// import NoTodo from './NoTodo'

const Main = () => {

  // const allTodos = useSelector((store) => store.todos.items)

  // const allDeletedItems = useSelector((store) => store.todos.deletedItems)

  const [isUndoDisabled, setIsUndoDisabled] = useState(true)

  return (
      <main>
        <Header />
        <AddTodo />
        {/* {allTodos.length || allDeletedItems.length ?
        <> */}
        <TodosList setIsUndoDisabled={setIsUndoDisabled} />
        <TodosActions isUndoDisabled={isUndoDisabled} setIsUndoDisabled={setIsUndoDisabled} />
        {/* </>
        :
        <NoTodo /> } */}
        <Footer />
      </main>
  )
}

export default Main
