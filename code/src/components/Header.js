import React from 'react'
import './Header.css'



export const Header =() => {

    return (
        <article className="header">
            <h1>Get Up! You got stuff to do!</h1>
            <p>{new Date().toLocaleString() + ''}</p>
        </article>

    )
}