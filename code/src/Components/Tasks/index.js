import React, { useState } from "react";
import Collapse from '@kunukn/react-collapse';
import { useSelector } from 'react-redux'
import { Task } from '../Task/index'
import { Empty } from "Components/Empty";
import styled from 'styled-components';

const TasksContainer = styled.section`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 90%;
    heigth: auto;
    align-items: center;
      @media (min-width: 768px){
        width: 70%;
    }
    @media (min-width: 992px) {
        width: 50%;
    }
`

const TasksCompleted = styled.button`
    color: white;
    box-shadow: -4px 4px 2px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    margin: 1.2rem auto 0 auto;
    width: 100%;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    background: rgb(0 0 0 / 84%);
    font-size: 1.1rem;
      @media (min-width: 768px){
        font-size: 1.2rem;
    }
  
`

const IconCompleted = styled.i`
    transform: ${props => props.rotate};
    width: 1em;
    color: white;
    height: 1em;
    will-change: transform;
    fill: #aaa;
    font-size: 1rem;
    padding: 0 7px;
`

export const Tasks = () => {
    const tasks = useSelector(store => store.todo.tasks);
    const isThereCompleted = tasks.some(task => task.isComplete === true);
    const [isOpen, setIsOpen] = useState(true);

    const onToggle = () => setIsOpen(s => !s);

    const getTasksWithCompleteValue = (tasks, isComplete) => tasks.filter(task => task.isComplete === isComplete)


    return (
        <TasksContainer>
            {tasks.length < 1 ? <Empty /> :
                getTasksWithCompleteValue(tasks, false).map(task => {
                    return (<Task task={task} key={task.id} />)
                })}
            {
                <>
                    {isThereCompleted && <TasksCompleted onClick={onToggle}>Completed
                        <IconCompleted
                            className="fas fa-chevron-up"
                            rotate={isOpen ? "rotate(180deg)" : ""}
                        >

                        </IconCompleted>
                    </TasksCompleted>}
                    <Collapse isOpen={isOpen} elementType="section" transition="height 300ms cubic-bezier(.4, 0, .2, 1)" style={{ width: "100%" }}>
                        {getTasksWithCompleteValue(tasks, true).map(task => {
                            return (<Task task={task} key={task.id} />)
                        })}
                    </Collapse>
                </>
            }
        </TasksContainer>
    )
}