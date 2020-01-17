import React from 'react'


import './header.css'

export const Header = () => {
// const date = + new Date()
const currentDate = Math.floor(Date.now() / 10000)

    return (
        <header>
            <div className="today">
            <h1>Todo</h1>
            <p>{currentDate}</p>
            </div>
            <div class="task-count">
            <p>You have xx {} tasks to do</p>
            </div>
        </header>
        
    )
}