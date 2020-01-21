import React from 'react'
import './Header.css'


export const Header = () => {
    return (
        <container className="dateContainer">
            {/* I would like to add time api here */}
            <p>10.43</p>
            <h1>My Shoppinglist</h1>
            {/* I would like to add date api here */}
            <p>2020.21.01</p>
        </container>
    )
}