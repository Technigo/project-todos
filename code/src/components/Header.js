import React from 'react'
import moment from 'moment'
import './Header.css'


const now = moment().format('LLLL')
//console.log(now)

export const Header = () => {

    return (
        <div className="header-container">
            <h1> Todays todo:</h1>
            <h4>{now}</h4>
        </div>
    )
}

