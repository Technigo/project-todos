import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    return(
        <>
        <nav>
            <NavLink to='/'>To do</NavLink>
            <NavLink to='DoneTasks'>Done</NavLink>
        </nav>
        </>
    )
}

export default Navbar