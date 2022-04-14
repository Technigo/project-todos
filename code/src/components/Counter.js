import React from 'react'

const Counter = () => {
    
    const todoItems = []

    const totalTodos = 0


    return (
        <>
        Total: {totalTodos}
        {/* <p>No. of tasks: {task.length}</p> */}
        <p>Finished:  </p>
           <ul className="items">
               {todoItems.map((task) => (
                   <div key={task.id} task={task} ></div>
               ))}
           </ul>
           
            Unfinished:
        </>
    )
}

export default Counter;