import React from 'react'
import { BsListCheck } from 'react-icons/bs'
import { useSelector } from 'react-redux'


import './Header.css'

const Header = () => {
    const items = useSelector((store) => store.todos.items)

    return (
        <>
        <header>
            <div className="todo-header">
                <h1><BsListCheck /></h1>
            </div>
            <div>
            <p>{items.length} tasks</p>
            </div>
        </header>
        </>
    )
}

export default Header