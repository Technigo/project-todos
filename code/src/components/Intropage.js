import React from 'react'
import { Link } from 'react-router-dom'



const IntroPage = () => {

    return (

        <>
        <div className="cloudy-header">
            <img src="./assets/cloud.png" alt="clouds" />
        <h1 className="header-start">Do it today – get it out of your head</h1>
        </div>

        <Link to="/app">
            <button className="btn">Write it down</button>
        </Link>
        </>


    )
}


export default IntroPage