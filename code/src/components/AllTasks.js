
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'

import styled from 'styled-components'



const TaskBar = styled.li`
padding: 2em;
flex: 1;
border: 1px solid gray;
cursor: move;

`
  
export const AllTasks = () => {

    const dispatch = useDispatch()


  const allTasks = useSelector((store) => store.tasks.items)

        return (
        <>

        {allTasks.map((task) => (
            <TaskBar key={task.id} draggable="true" >
                <label htmlFor={task.id}>{task.title}</label> 
                <input type="checkbox" checked={task.status} id={task.id} onChange={() => dispatch(tasks.actions.toggleState(task.id))}></input>
            </TaskBar>
        ))}

        </>

        )
}

export const FinishedTasks = () => {

    const dispatch = useDispatch()


    const finishedTasks = useSelector((store) => store.tasks.items.filter(t => t.status))

        return (
        <>

        {finishedTasks.map((task) => (
            <TaskBar key={task.id} draggable="true" >
                <label htmlFor={task.id}>{task.title}</label> 
                <input type="checkbox" checked={task.status} id={task.id} onChange={() => dispatch(tasks.actions.toggleState(task.id))}></input>
            </TaskBar>
        ))}

        </>

        )
}


export const UnFinishedTasks = () => {

    const dispatch = useDispatch()


    const unFinishedTasks = useSelector((store) => store.tasks.items.filter(t => !t.status))

        return (
        <>

        {unFinishedTasks.map((task) => (
            <TaskBar key={task.id} draggable="true" >
                <label htmlFor={task.id}>{task.title}</label> 
                <input type="checkbox" checked={task.status} id={task.id} onChange={() => dispatch(tasks.actions.toggleState(task.id))}></input>
            </TaskBar>
        ))}

        </>

        )
}