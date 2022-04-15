import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'


import styled from 'styled-components'

const ListWrapper = styled.div`
width: 500px;
margin: auto;
display: flex;
position: relative;
flex-direction: column;
gap: 1em;
`

const TaskBar = styled.li`
padding: 2em;
flex: 1;
border: 1px solid gray;
cursor: move;

`


export const TaskList = () => {

    const allTasks = useSelector((store) => store.tasks.items)

    const dispatch = useDispatch()

    
   
   
    return (
        <ListWrapper> 
        {allTasks.map((task) => (

            <TaskBar key={task.id} draggable="true" >
                <label for={task.id}>{task.title}</label> 
                <input type="checkbox" checked={task.status} id={task.id} onClick={() => dispatch(tasks.actions.toggleState(task.id))}></input>
            </TaskBar>
        ))}
        </ListWrapper>
    )
}