import React from 'react'

import TodoList from './TodoList'
import NewItem from './NewItem'
import Header from './Header'


export const Content = () => {
  return (
    < main>
      < Header />
      < TodoList />
      < NewItem />
    </main>
  )
}

export default Content
