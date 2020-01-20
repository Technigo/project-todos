import React from 'react'
import { tasks } from '../reducers/tasks'
import { useSelector } from 'react-redux'
import './header.css'

export const Header = () => {

const quantity = useSelector((state) => state.tasks.items )
const totalQuantity = quantity.length
const moment = require('moment');


return (
   <header>

    {totalQuantity === 0 && (
        <div className="today">
            <h1>Todo</h1>
            <p>{moment().format('MMMM Do, YYYY')}</p>
        </div>
        )
    }

    {totalQuantity >= 1 && (
        <>
        <div className="today">
            <h1>Todo</h1>
            <p>{moment().format('MMMM Do, YYYY')}</p>      
        </div>
        <div class="task-count">
            <p>Total todos: {totalQuantity}</p>
        </div>
</>
        )}
        
        </header>
        

    
           
       
        
    )
}