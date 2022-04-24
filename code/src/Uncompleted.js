import React from "react";
import Header from "Header";
import Task from "Task";
import uniqid from 'uniqid';
import EmptyState from "EmptyState";
import { CompleteAllBtn, AddNewTaskBtn } from "Buttons";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import tasks from "reducers/tasks";

const AllTasks = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

const Uncompleted = () => {

    
    const taskList = useSelector(state => state.tasks.list);

    const dispatch = useDispatch();

    const onClickCompleteAll = () => {
        dispatch(tasks.actions.completeAllItems())
    }

    
    let uncompletedList = []
    
    if (taskList) {
        uncompletedList = taskList.filter(item => !item.complete);
    }
    

    return (
        <div className="container">
            <Header header='🚨 Uncomplete' />
            <AllTasks>
                    <CompleteAllBtn completeAll={onClickCompleteAll}  />
                    {uncompletedList.map(item =>  <Task task = {item} key={uniqid()}/>)}
                
                { uncompletedList.length === 0 && <EmptyState text='whoho, all tasks are done. Add new tasks and see them here'/> }
                <AddNewTaskBtn />
            </AllTasks>
        </div>
    )
}

export default Uncompleted