import React from 'react'
import CheckAllBtn from './CheckAllBtn'
import ClearAllBtn from './ClearAllBtn'

import './Manager.css'

const Manager = () => {

    return (
        <div className="manager-container">
        <CheckAllBtn 
        className="manager-btn"
        />
        <ClearAllBtn 
        className="manager-btn"
        />
    </div>
    )

}

export default Manager