import React from 'react'
import { BsListCheck } from 'react-icons/bs'


import './Header.css'

const Header = () => {

    return (
        <>
        <header>
            <div className="todo-header">
                <h1><BsListCheck /></h1>
            </div>
        </header>
        </>
    )
}

export default Header