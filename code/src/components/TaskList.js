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

    @media ${devices.tablet} {
    width:768px;
    }
`

const TaskArticle = styled.article`
    position: relative;
    border-bottom: solid 1px #5c4d7d;
`
const TaskName = styled.h3`
    font-family: 'Grape Nuts', cursive;
`

const DeleteButton = styled.button`
    background-color: white;
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

    const onDeleteButton = (index) => {
        dispatch(tasks.actions.deleteItem(index))
     }

     
     
    if (allTasks.length === 0) {
        return (
            <section>
                <p> You dont have any tasks!</p>
            </section>
        )
    } else {
        return (
            <section>
                <Container>
                {allTasks.map((taskItem, index) => (
                    <TaskArticle key={taskItem.id}>
                        <TaskName>{taskItem.text}</TaskName>
                        <label> Completed:
                            <input type="checkbox" 
                            checked={taskItem.complete} 
                            onChange={() => onItemToggle(taskItem.id)}
                            />
                        </label>
                        <DeleteButton 
                            onClick={() =>onDeleteButton(index)}>                      
                            <span role="img" aria-label="cross">❌
                            </span></DeleteButton>
                    </TaskArticle>
                ))}
                </Container>
            </section>
        )
    }



}

export default TaskList