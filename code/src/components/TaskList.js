import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'
import { AllTasks, FinishedTasks, UnFinishedTasks } from './AllTasks.js'

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
const TaskBar = styled.li`
padding: 2em;
flex: 1;
border: 1px solid gray;
cursor: move;

`



export const TaskList = () => {

    const dispatch = useDispatch()

    const allTasks = useSelector((store) => store.tasks.items)
    const finishedTasks = 
        useSelector((store) => store.tasks.items.filter(t => t.status))

        const unfinishedTasks = 
            useSelector((store) => store.tasks.items.filter(t => !t.status))



    const [tasksList, setTaskList] = useState(allTasks)

    const pushToUnfinished = (task) => {
        tasks.actions.toggleFINUNFIN(task.id)
    }

    // useEffect(() => {

    //     {allTasks.map((task) => (
    //         <TaskBar key={task.id} draggable="true" >
    //             <label htmlFor={task.id}>{task.title}</label> 
    //             <input type="checkbox" checked={task.status} id={task.id} onChange={() => dispatch(tasks.actions.toggleState(task.id))}></input>
    //         </TaskBar>
    //     ))}

    // }, [tasksList])
    // const setState = (value) => {
    //     if (value === 'DONE') {
         
    //         // store.items.filter(t => t.status)
           
    //         setTaskList(finishedTasks)
        
    //     }
    //     else if (value === 'UNDONE'){
            
    //             // store.items.filter(t => !t.status)
                
    //             setTaskList(unfinishedTasks)
                
    //         }
    //     else {             
        
    //         setTaskList(allTasks)
            
    //     }  
    //     allTasks = tasksList
    // }


    // const onClickSort = (value) => {
        
        
    //  setState(value)
        
       
 
    // tasksList.map((task) => (
    //             <TaskBar key={task.id} draggable="true" >
    //                 <label htmlFor={task.id}>{task.title}</label> 
    //                 <input type="checkbox" checked={task.status} id={task.id} onChange={() => dispatch(tasks.actions.toggleState(task.id))}></input>
    //             </TaskBar>
    //         ))
    // }


    // const [filtered, setFiltered] = useState(allTasks)


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
    // if (payload === 'DONE') {
    //     return (setFiltered(finishedTasks))
    // }
    // else if (payload === 'UNDONE'){
    //     return setFiltered(unfinishedTasks)
    // }
    // else { return setFiltered(allTasks) 
    // }


    // const onClickSort = (payload) => {
        
    //     dispatch(tasks.actions.sort(payload))

    // }

   
   
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

        {/* <button onClick={() => onClickSort('DONE')}>Finished</button>
        <button onClick={() => onClickSort('UNDONE')}>Unfinished</button>
        <button onClick={() => onClickSort('')}>All</button> */}
{/* {tasksList.map((task) => (
            <TaskBar key={task.id} draggable="true" >
                <label htmlFor={task.id}>{task.title}</label> 
                <input type="checkbox" checked={task.status} id={task.id} onChange={() => dispatch(tasks.actions.toggleState(task.id))}></input>
            </TaskBar>
        ))} */}

{/*         
            {allTasks.map((task) => (
                <TaskBar key={task.id} draggable="true" >
                    <label htmlFor={task.id}>{task.title}</label> 
                    <input type="checkbox" checked={task.status} id={task.id} onChange={() => dispatch(tasks.actions.toggleState(task.id))}></input>
                </TaskBar>
            ))} */}


            

            <ListWrapper> 
                All
            <AllTasks />
            Finsihed
            <FinishedTasks />

            Unfinished
            <UnFinishedTasks />

            </ListWrapper>
            

       


        <button onClick={() => setTaskList(finishedTasks)}>Finished</button>
        <button onClick={() => setTaskList(unfinishedTasks)}>Unfinished</button>
        <button onClick={() => setTaskList(allTasks)}>All</button>

        <button onClick={() => dispatch(tasks.actions.removeAll())}>REMOVE ALL</button>



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