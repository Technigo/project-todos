import React from 'react'
// import moment from 'moment'
import { useSelector } from "react-redux"
import Today from './Today'

import Counter from './Counter'

const Header = () => {
    const date = useSelector(store => store.todos.today)

    return (
    <header className='header'>
        <div className='dateandcircles'>
            <div className='circles-container'>
                <div className='circle1'></div>
                <div className='circle2'></div>
                <div className='circle3'></div>
                <div className='circle4'></div>
            </div>
            <Today />
            {/* <p>{moment(date).format('dddd')}, {moment(date).format('ll')}</p> */}
        </div>
        <div className='heading-counter'>
            <h1>Your todo's!</h1>
            <Counter />
        </div>
    </header>

    )

}

export default Header