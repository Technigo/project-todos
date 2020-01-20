import React from 'react'
import moment from 'moment'
import './Header.css'


const now = moment().format('LLLL')


export const Header = (props) => {

    return (
        <div className="header-container">
            <h1> ToDo:</h1>
            <h4>{now}</h4>
        </div>
    )
}

