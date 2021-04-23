import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { tasks } from '../reducers/tasks'
import styled from 'styled-components'

const ListSection = styled.section`
    display: flex;
    flex-direction: column;
    margin: 20px;
`
const TaskSection = styled.section`
    display: flex;
    align-items: center;

`
const CheckBox = styled.input`
    border: solid 1px #0F1A84;
    margin: 0px 10px 20px 10px;
` 
const TaskText = styled.p`
    font-size: 25px;
    margin: 0px 10px 20px 10px;
`
const DeleteButton = styled.button`
    border: none;
    background-color: #F49A7B;
    color: #681313;
    width: 60px;
    height: 35px;
    border-radius: 10px;
    margin: 0px 10px 20px 10px;
`

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