import React from 'react'


const CompletedTasks = (taskItem) => {

    return (

        <>
        <p><b>Completed</b></p>
        <p>Task... Task.. Task</p>
        {taskItem.isDone} 
        </>


    )
}


export default CompletedTasks