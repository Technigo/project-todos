import React from 'react'

import { CompleteAll } from './CompleteAll'
import { ItemCounter } from './ItemCounter'
import { ItemContainer } from './ItemContainer'

const TodoList = () => {    
  
  return (
    <div className="todo-container">     
      <ItemCounter />
      <ItemContainer />     
      <CompleteAll />
    </div>
  )
}
export default TodoList