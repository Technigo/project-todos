import React from 'react'
import './Header.css'


export const Header = () => {
    return (
        <container className="headerContainer">
            {/* I would like to add time Api here */}
            <div className="dateBar">
                <p className="dateP">2020.21.01</p>
                <p className="dateP">10.43</p>
            </div>
            <h1>My Shopping list</h1>
            {/* I would like to add date Api here */}
        </container>
    )
}