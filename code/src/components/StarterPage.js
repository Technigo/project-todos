import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const StarterPage = () => {

    const [themeInput, setThemeInput] = useState('')
    const [nameInput, setNameInput] = useState('')

    const onThemeInputChange = (event) => {
        setThemeInput(event.target.value)
    }
    const onNameInputChange = (event) => {
        setNameInput(event.target.value)
    }
    return (
        <>
            <div>
                <p>Hey there! Welcome to your new to-do App!</p>
                <p> Please enter your name and choose the theme of your to-do app.....</p>
                <input
                    className="name"
                    type="text"
                    value={nameInput}
                    onChange={onNameInputChange} />
                <select
                    className="input"
                    id="themeInput"
                    value={themeInput}
                    onChange={onThemeInputChange}>
                    <option disabled value=''>Select an option:</option>
                    <option value="Calm" selected>Calm/Serene</option>
                    <option value="Vibes" selected>90s Vibes</option>
                    <option value="Bright" selected>Bright</option>
                </select>

            </div>
            {/*<div> Hi there {nameInput}, you want a {themeInput} setting?</div>*/}
            <div>
                {/*<button onClick ={()=>}> Clicky to continue</button>*/}
                <Link to="/Todo">
                    <button>Clicky</button>
                </Link>
            </div>
        </>
    )

}


export default StarterPage