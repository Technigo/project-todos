import React from 'react'
import { useSelector } from 'react-redux' 
import dayjs from 'dayjs'

const Header = () => {
  const items = useSelector((store) => store.tasks.items)  
  const completedItems = items.filter(items => items.complete)
  const currentDate = dayjs()
  
  return (
    <header className="app-header">
      <h1>TASKS</h1>
      <h2>{currentDate.format('dddd DD/MM')}</h2>
      <div>
        <p className="header-completed-tasks">Completed tasks: {completedItems.length}/{items.length}</p>
      </div>
    </header>
    )
}
 
export default Header;