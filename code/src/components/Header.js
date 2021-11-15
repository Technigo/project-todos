import React from 'react'
import moment from 'moment';
import { useSelector } from "react-redux";

const Header = () => {
    const date = useSelector(store => store.todos.today)
    const tasks = useSelector(store => store.todos.tasks)

    return (
    <header className='header'>
        <div className='dateandcircles'>
            <div className='circles-container'>
                <div className='circle1'></div>
                <div className='circle2'></div>
                <div className='circle3'></div>
                <div className='circle4'></div>
            </div>
            <p>{moment(date).format('dddd')}, {moment(date).format('ll')}</p>
        </div>
        <h1>Your todo's!</h1>

    </header>

    )

}

export default Header