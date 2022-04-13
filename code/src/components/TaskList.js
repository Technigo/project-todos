import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components'

import tasks from "reducers/tasks";
import emptypage from "images/emptypage.jpg"

const devices = {
    mobile: "(min-width: 375px)",
    tablet: "(min-width: 768px)",
    desktop: "(min-width: 1025px)",
  }

const Container = styled.div`
    width: 375px;
    margin: 0 auto;

    @media ${devices.tablet} {
    width:768px;
    }
`

const WrapperDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`

const TaskArticle = styled.article`
    position: relative;
    border-bottom: solid 1px #5c4d7d;
    padding: 10px;
    overflow-wrap: break-word;
`
const TaskName = styled.h3`
    font-family: 'Grape Nuts', cursive;
    font-size: 24px;
`

const DeleteButton = styled.button`
    background-color: white;
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    cursor: pointer;
`

const CheckLabel = styled.label`
    font-size: 16px;
`


const TaskList = () => {
    const allTasks = useSelector((store) => store.tasks.items)
    const remainingTasks = allTasks.filter((task) => task.complete === false)

    const dispatch = useDispatch()

    const onItemToggle = (taskId) => {
        dispatch(tasks.actions.toggleItem(taskId))
    }

    const onDeleteButton = (index) => {
        dispatch(tasks.actions.deleteItem(index))
     }

     
     
    if (allTasks.length === 0) {
        return (
            <section>
                <Container>
                    <WrapperDiv>
                        <img src={emptypage} alt="two people scheduling" width="375px"/>
                    </WrapperDiv>
                </Container>
            </section>
        )
    } else {
        return (
            <section>
                <Container>
                {allTasks.map((taskItem, index) => (
                    <TaskArticle key={taskItem.id}>
                        <TaskName>{taskItem.text}</TaskName>
                        <CheckLabel> Done
                            <input 
                            type="checkbox"
                            name="tasks" 
                            checked={taskItem.complete} 
                            onChange={() => onItemToggle(taskItem.id)}
                            />
                        </CheckLabel>
                        <DeleteButton 
                            onClick={() =>onDeleteButton(index)}>                      
                            <span role="img" aria-label="cross">✕
                            </span></DeleteButton>
                    </TaskArticle>
                ))}
                </Container>
            </section>
        )
    }



}

export default TaskList