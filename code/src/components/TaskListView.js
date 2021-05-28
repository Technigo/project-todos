import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { tasks } from '../reducers/tasks'

export const TaskListView = () => {

    const dispatch = useDispatch()
    const taskList = useSelector((store => store.tasks.taskList))

    return (
        <ListSection>
            {taskList.map(task => (
                <div key={task.id}>
                    <TaskSection>
                        <CheckBox 
                            type='checkbox'
                            checked={task.IsDone}
                            onChange={() => dispatch(tasks.actions.toggleIsDone(task.id))} 
                        />
                        <TaskText>{task.taskText}</TaskText>
                        <DeleteButton onClick={() => dispatch(tasks.actions.deleteTask(task.id))}>Delete</DeleteButton>
                    </TaskSection>
                </div>
            ))}
        </ListSection>
    )
}

const ListSection = styled.section`
    display: flex;
    flex-direction: column;
    margin: 20px;
    // background-color: red;
    @media (min-width: 768px) {
        margin: 30px 140px 20px 140px;
    }
    @media (min-width: 992px) {
        width: 600px; 
    }
`
const TaskSection = styled.section`
    display: flex;
    align-items: center;
`
const CheckBox = styled.input`
    margin: 0px 10px 20px 10px;
` 
const TaskText = styled.p`
    font-size: 25px;
    margin: 0px 10px 20px 10px;
    @media (min-width: 992px) {
        font-size: 35px;
    }
`
const DeleteButton = styled.button`
    border: none;
    background-color: #F49A7B;
    color: #681313;
    width: 50px;
    height: 30px;
    border-radius: 10px;
    margin: 0px 10px 20px 10px;
    font-size: 11px;
    @media (min-width: 992px) {
        margin-left:25px;
        font-size: 13px;
        width: 55px;
        height: 33px;
    }
`