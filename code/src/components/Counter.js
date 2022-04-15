import React from 'react'
import { useState } from 'react'

import { tasks } from 'reducers/tasks'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import styled from 'styled-components'



const Counter = () => {
    
    

    return (
        <>


            {/* <button
            className="sorting-btn"
            onClick={e => {
                e.preventDefault()
                sortFinished()
            }} 
            >Sort finished</button> */}
        </>
    )
}

export default Counter;


//   {/* <p>No. of tasks: {task.length}</p> */}
//         {/* <p>Finished:  </p>
//            <ul className="items">
//                {todoItems.map((task) => (
//                    <div key={task.id} task={task} ></div>
//                ))}
//            </ul>
           
//             Unfinished: */}

            // const todoItems = []

    // const totalTodos = 0
    // const [filtered, setFiltered] = useState([])

    // const dispatch = useDispatch()

    // const taskList = useSelector((store) => store.tasks.items)


    // const sortFinished = (e) => {
    //     e.preventDefault();
    //     dispatch(tasks.actions.filterTodos('DONE'))

    // }    