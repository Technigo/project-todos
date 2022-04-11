import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components'

import tasks from "reducers/tasks";

const devices = {
    mobile: "(min-width: 375px)",
    tablet: "(min-width: 768px)",
    desktop: "(min-width: 1025px)",
  }

const Container = styled.div`
    width: 375px;
    margin: 0 auto;
    background-color: #caf0f8;

    @media ${devices.tablet} {
    width:768px;
    }
`

const TaskArticle = styled.article`
    position: relative;
    border-bottom: solid 1px #ade8f4;
`
const TaskName = styled.h3`
    font-family: 'Grape Nuts', cursive;
`

const RemoveButton = styled.button`
    background-color: #caf0f8;
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    cursor: pointer;
`


const TaskList = () => {
    const allTasks = useSelector((store) => store.tasks.items)

    const dispatch = useDispatch()

    const onItemToggle = (taskId) => {
        dispatch(tasks.actions.toggleItem(taskId))
    }

    // const onButtonClick = (taskId) => {
    //     dispatch(tasks.actions.removeItem(taskId))
    // }

    return (
        <section>
            <Container>
            {allTasks.map(taskItem => (
                <TaskArticle key={taskItem.id}>
                    <TaskName>{taskItem.text}</TaskName>
                    <label> Completed:
                        <input type="checkbox" 
                        checked={taskItem.complete} 
                        onChange={() => onItemToggle(taskItem.id)}
                        />
                    </label>
                    <RemoveButton type="button">                      
                     {/* onClick={() =>onButtonClick(taskItem.id)} */}
                        <span role="img" aria-label="cross">❌
                        </span></RemoveButton>
                </TaskArticle>
            ))}
            </Container>
        </section>
    )
}

export default TaskList