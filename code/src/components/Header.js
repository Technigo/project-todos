import React from 'react'
import { useSelector } from 'react-redux'
import ClearAll from "components/ClearAll"




const Header = () => {

  //Filter out the amount of uncompleted todos
  const items = useSelector((store) => store.todos.items);
  const amountTodos = items.filter(todo => !todo.isComplete).length;

  return (
    <header>
    <h1>My to-do's</h1>
    <div className="header-functions-container">
      <p>{amountTodos} uncompleted</p>
      <ClearAll />
    </div>
    </header>
  )
}

export default Header;