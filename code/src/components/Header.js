import React from 'react'
import { useSelector } from 'react-redux' 

const Header = () => {
    const items = useSelector((store) => store.tasks.items)  
    const completedItems = items.filter(items => items.complete)

    return (
        <header className="app-header">
            <h1>TASKS</h1>
            <h2>2021-04-23</h2>
            <div>
                <p className="header-completed-tasks">Completed tasks: {completedItems.length}</p>
                <p className="header-total-tasks">Total tasks: {items.length}</p>
            </div>
        </header>
    )
}
 
export default Header;