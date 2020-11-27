import React from 'react'
import {useDispatch} from 'react-redux'
import styled from 'styled-components'
import moment from 'moment'

import {tasks} from '../reducers/tasks'
import {TaskContainer, RemoveButton, TaskTitle, Todo, DateStamp} from './StyledComponents'
import {Checkbox, CustomCheckbox} from './CheckboxStyling'


export const Task = ({text, complete, task}) => {
    const dispatch = useDispatch()
    const check = () => {
        dispatch(tasks.actions.markComplete(task))
    }

    return(
        <TaskContainer>
            <Todo checked={complete}>
                <Checkbox type="checkbox"
                checked={complete}
                onChange={check}/>
                <CustomCheckbox checked={complete}></CustomCheckbox>
                <TaskTitle checked={complete}>{text}</TaskTitle>
                <DateStamp>{moment(task.date).format("MMM Do")}</DateStamp>
            </Todo>
            <RemoveButton onClick={()=>dispatch(tasks.actions.removeThisTask(task))}>X</RemoveButton>
            
        </TaskContainer>
    )
}

