import React from 'react'
import '../css/TodoStartPage.css'

import list from '../assets/list.png'

const TodoStartPage = () => {
    return(
        <section className="start-page-wrapper">
            <h1>Let's start!</h1>
            <p>We will remember your todos so you don't have to!</p>
            <img 
                src={list}
                alt="list"
                className="start-logo"
            />
        </section>
    )
}

export default TodoStartPage