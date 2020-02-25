import React from 'react'
import { TodoCount } from './TodoCount'
import { tasks } from '../reducers/tasks'
import { useSelector } from 'react-redux'
import './header.css'

export const Header = () => {
    const moment = require('moment');


    return (
        <header>
            <div className="today">
                <h1>Todo</h1>
                <p>{moment().format('MMMM Do, YYYY')}</p>
            </div>
            <TodoCount />
        </header>
    )
}