import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {

    return(
        <>
        <nav>
            <NavLink to='NotDoneTasks'>To do</NavLink>
            <NavLink to='DoneTasks'>Done</NavLink>
        </nav>
        </>
    )
}

export default Header