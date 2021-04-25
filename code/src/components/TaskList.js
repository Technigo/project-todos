import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import tasks from '../reducers/tasks'
import EmptyStateAnimation from './EmptyStateAnimation'

const TaskContainer = styled.div`
    overflow: scroll;
    width: 240px;
    @media (min-width: 768px) {
        width: 384px;
      } 
      @media (min-width: 1200px) {
        width: 600px;
      } 
`

const SingleTaskContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 4px;
    margin-bottom: 8px;
    border-bottom: 1px solid black;
    word-break: break-word
`

const Checkbox = styled.input`
    width: 10%
    margin: 0;
`

const Normaltext = styled.p`
    font-size: 12px;
    margin: 0;
`

const DeleteButton = styled.button`
    width: 13px;
    height: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3px 4px 3px 3px;
    background-color: #E5E5E5;
    border: 1px solid grey;
    border-radius: 3px
`

const ButtonText = styled.p`
    font-size: 7px;
    margin: 0;
`

const TaskList = () => {
    const items = useSelector((store) => store.tasks.items)

    const dispatch = useDispatch()

    return (
        <>
            {items.length > 0 ? 
                <TaskContainer>
                    {items.map((task, index) => (
                        <SingleTaskContainer key={task.id}>
                            <Checkbox
                                type='checkbox'
                                checked={task.isComplete}
                                onChange={() => dispatch(tasks.actions.toggleComplete(task.id))}
                            />
                            <Normaltext>{task.description}</Normaltext>
                            <DeleteButton 
                                onClick={() => dispatch(tasks.actions.removeTask(task.id))}>
                                <ButtonText>X</ButtonText>
                            </DeleteButton>
                        </SingleTaskContainer>
                    ))}
                </TaskContainer>
                :
                <EmptyStateAnimation />
            }
        </>
    )
}

export default TaskList
