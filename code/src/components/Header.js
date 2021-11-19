import React from 'react'
import { useSelector } from 'react-redux'
import ClearAll from "components/ClearAll"




const Header = () => {

  const items = useSelector((store) => store.todos.items); //Reaching for the todos via selector
  const amountTodos = items.filter(todo => !todo.isComplete).length; //Filter out the amount of uncompleted todos
  const totalTodos = items.length; //Reaching for total amount of todo's

  return (
    <header>
    <h1>My to-do's</h1>
    <div className="header-functions-container">
      <p className="counter-paragraph">Completed {amountTodos}/{totalTodos}</p>
      <ClearAll />
    </div>
    </header>
  )
}

export default Header;