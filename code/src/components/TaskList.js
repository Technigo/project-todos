import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'
import { AllTasks } from './AllTasks.js'
import { FinishedTasks } from './AllTasks.js'




import styled from 'styled-components'

const ListWrapper = styled.div`
width: 500px;
margin: auto;
display: flex;
position: relative;
flex-direction: column;
gap: 1em;
`
const SortListWrapper = styled.div`
display: flex;
width: 500px;
margin: auto;
position: relative;
gap: 1em;
opacity: 0.5;

    
`



export const TaskList = () => {


    const allTasks = useSelector((store) => store.tasks.items)
    const finishedTasks = useSelector((store) => store.tasks.items.filter(t => t.status))
    const unfinishedTasks = useSelector((store) => store.tasks.items.filter(t => !t.status))

    const dispatch = useDispatch()

    const [filtered, setFiltered] = useState(allTasks)


    // const sort = (input) => {
    //     if (input === 'DONE') {
    //         return (setFiltered(finishedTasks))
    //     }
    //     else if (input === 'UNDONE'){
    //         return setFiltered(unfinishedTasks)
    //     }
    //     else { return setFiltered(allTasks) 
    //     }
    // }
    // const unfinished = setFiltered(unfinishedTasks)


    const onClickSort = (payload) => {
        
        dispatch(tasks.actions.sort(payload))

        if (payload === 'DONE') {
            return (setFiltered(finishedTasks))
        }
        else if (payload === 'UNDONE'){
            return setFiltered(unfinishedTasks)
        }
        else { return setFiltered(allTasks) 
        }

    }

   
   
    return (
        <>
        
        {/* <button onClick={unfinished}>Unfinished</button> */}

        {/* <ListWrapper> 
        {allTasks.map((task) => (

            <TaskBar key={task.id} draggable="true" >
                <label htmlFor={task.id}>{task.title}</label> 
                <input type="checkbox" checked={task.status} id={task.id} onChange={() => dispatch(tasks.actions.toggleState(task.id))}></input>
            </TaskBar>
        ))}
        </ListWrapper> */}




        {/* <p>Total: {allTasks.length}</p>
        <p>Unfinished: {unfinishedTasks.length}</p>
        <p>Finished: {finishedTasks.length}</p> */}

        <button onClick={() => onClickSort('DONE')}>Finished</button>
        <button onClick={() => onClickSort('UNDONE')}>Unfinished</button>
        <button onClick={() => onClickSort('')}>All</button>


        <ListWrapper> 

       
        {filtered === allTasks && <AllTasks />
        }
        {filtered === finishedTasks && <FinishedTasks />
        }
        
        </ListWrapper>

        </>


    )
}


// <ListWrapper> 
// {allTasks.map((task) => (

//     <TaskBar key={task.id} draggable="true" >
//         <label for={task.id}>{task.title}</label> 
//         <input type="checkbox" checked={task.status} id={task.id} onClick={() => dispatch(tasks.actions.toggleState(task.id))}></input>
//     </TaskBar>
// ))}

// {finishedTasks.map((task) => (
//     <TaskBar key={task.id} draggable="true" >
//     <label for={task.id}>{task.title}</label> 
//     <input type="checkbox" checked={task.status} id={task.id} onClick={() => dispatch(tasks.actions.toggleState(task.id))}></input>
// </TaskBar> 
//  ))}
//  if ({filtered} === {allTasks}) { 
            
    // allTasks.map((task) => (
    //     <TaskBar key={task.id} draggable="true" >
    //         <label htmlFor={task.id}>{task.title}</label> 
    //         <input type="checkbox" checked={task.status} id={task.id} onChange={() => dispatch(tasks.actions.toggleState(task.id))}></input>
    //     </TaskBar>
    // ))

    // }