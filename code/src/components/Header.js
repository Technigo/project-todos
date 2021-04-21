import React from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'

const date = moment().format('ll'); 
console.log(date)


const Header = () => {

    const tasks = useSelector((store) => store.todos.tasks)
    let undoneTasks = tasks.filter((task) => !task.isComplete)
    undoneTasks = undoneTasks.length

    return (

        <div className='header-container'>
            <h1>Vacay Planner!</h1>
            <div className='info-container'>
                <p>
                 {date}
                </p>
                <p>
                {undoneTasks} things left to do!
                </p>
            </div>
        </div>

    )
}

export default Header