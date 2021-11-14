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
    width: fit-content;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    background: rgb(0 0 0 / 84%);
     font-size: 1.2rem;
      @media (min-width: 768px){
        font-size: 1.3rem;
    }
  
`

const IconCompleted = styled.i`
    transform: ${props => props.isOpen};
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
    const [isOpen, setIsOpen] = useState(false);

    const onToggle = () => setIsOpen(s => !s);

    return (
        <TasksContainer>
            {tasks.length < 1 ? <Empty /> :
                tasks.map(task => {
                    if (task.isComplete === false) {
                        return (<Task task={task} key={task.id} />)
                    }
                })}

            {
                <>
                    {isThereCompleted && <TasksCompleted onClick={onToggle}>Completed
                        <IconCompleted className="fas fa-chevron-up" isOpen={isOpen ? "rotate(180deg)" : ""}></IconCompleted>
                    </TasksCompleted>}
                    <Collapse isOpen={isOpen} transition="height 300ms cubic-bezier(.4, 0, .2, 1)">
                        {tasks.map(task => {
                            if (task.isComplete === true) {
                                return (<Task task={task} key={task.id} />)
                            }
                        })}
                    </Collapse>
                </>
            }
        </TasksContainer>
    )
}