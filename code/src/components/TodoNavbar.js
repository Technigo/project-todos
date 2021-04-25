import React from 'react'


import '../css/TodoNavbar.css'
import menu from '../assets/menu.png'
import loupe from '../assets/loupe.png'
import bell from '../assets/bell.png'

const TodoNavbar = () => {
    return (
        <nav className="navbar-wrapper">
            <div className="menu-icon-container">
                <img
                    src={menu}
                    alt="menu icon"
                />
            </div>
            <div class="other-icon-container">
                <img 
                    src={loupe}
                    alt="search icon"
                />
                <img
                    src={bell}
                    alt="bell icon"
                />
            </div>
        </nav>
    )
}

export default TodoNavbar