import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
	const items = useSelector((store) => store.todos.items) 
	const completedItems = items.filter(item => item.isComplete)
  
  return (
    <header className="header-container">
      <h1>What to do today?</h1>
      <p>Completed: {completedItems.length}/{items.length}</p>
		</header>
  )
}
export default Header