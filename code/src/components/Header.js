import React from 'react'
import { useSelector } from 'react-redux' // to hook the items in the store
import moment from 'moment'

const Header = () => {
    const items = useSelector((store) => store.todos.items)

    return (
        <header className="header">
            <div>
                <h1 className="headline">Todo</h1>
                <p className="date">{moment().format('MMMM Do')}</p>
            </div>
            <p className="todo-counter">{items.length} tasks</p>
        </header>
    )
}

export default Header