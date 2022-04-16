import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'


import styled from 'styled-components'




export const Sort = () => {


    // const allTasks = useSelector((store) => store.tasks.items)
    // const finishedTasks = useSelector((store) => store.tasks.items.filter(t => t.status))
    // const unfinishedTasks = useSelector((store) => store.tasks.items.filter(t => !t.status))

    const dispatch = useDispatch()

    // const [filtered, setFiltered] = useState(allTasks)


    const onClickSort = (payload) => {
        
        dispatch(tasks.actions.sort(payload))

       
    }


   
    return (
        <>
        
        <button onClick={() => onClickSort('DONE')}>Finished</button>
        <button onClick={() => onClickSort('UNDONE')}>Unfinished</button>
        <button onClick={() => onClickSort('')}>All</button>


        </>


    )
}

 // if (payload === 'DONE') {
        //     return (setFiltered(finishedTasks))
        // }
        // else if (payload === 'UNDONE'){
        //     return setFiltered(unfinishedTasks)
        // }
        // else { return setFiltered(allTasks) 
        // }
