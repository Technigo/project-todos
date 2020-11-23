import React from 'react'

export const Task = ({text, complete}) => {
    return(
        <div>
            <p>Title: {text} {complete ? ' complete' : ' uncomplete'}</p>
        </div>
    )
}