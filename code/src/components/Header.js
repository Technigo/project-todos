import React from 'react'
import { tasks } from '../reducers/tasks'
import { useSelector } from 'react-redux'
import './header.css'

export const Header = () => {
    const quantity = useSelector((state) => state.tasks.items.length)
    const moment = require('moment');


    return (
        <header>
            <div className="today">
                <h1>Todo</h1>
                <p>{moment().format('MMMM Do, YYYY')}</p>
            </div>

            {quantity >= 1 && (
                <div class="task-count">
                    <p>Total todos: {quantity}</p>
                </div>
            )}

        </header>
    )
}