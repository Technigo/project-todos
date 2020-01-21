import React from 'react'
import './Header.css'


export const Header = () => {
    return (
        <container className="headerContainer">
            {/* I would like to add time api here */}
            <div className="dateBar">
                <p>2020.21.01</p>
                <p>10.43</p>
            </div>
            <h1>My Shoppinglist</h1>
            {/* I would like to add date api here */}
        </container>
    )
}