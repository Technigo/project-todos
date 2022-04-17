import React from "react";
import reading from './img/reading.svg'

const EmptyState = () => {
    return (
        <div>
            <img src={reading} alt='Girl is sitting and reading books'/>
            <p>Add some tasks and see them here</p>
        </div>
    )
}

export default EmptyState;