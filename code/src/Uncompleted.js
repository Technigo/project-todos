import React from "react";
import Header from "Header";
import Task from "Task";
import uniqid from 'uniqid';
import EmptyState from "EmptyState";
import { CompleteAllBtn, AddNewTaskBtn } from "Buttons";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import tasks from "reducers/tasks";

const AllTasks = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

const Uncompleted = () => {

    
    const lists = JSON.parse(localStorage.getItem('reduxState')); 

    let unCompleteList = [...lists.tasks.list]

    if (lists) {
        unCompleteList = unCompleteList.filter(item => !item.complete);     
    }

    const dispatch = useDispatch();

    const onClickCompleteAll = () => {
        dispatch(tasks.actions.completeAllItems())
    }

    return (
        <div className="container">
            <Header header='🚨 Uncomplete' />
            <AllTasks>
                { unCompleteList.length > 0 && <>
                    <CompleteAllBtn completeAll={onClickCompleteAll}  />
                    {unCompleteList.map(item => <Task task = {item} key={uniqid}/>)}
                    </>
                }
                { unCompleteList.length === 0 && <EmptyState text='Yay, you have no uncomplete task. Add new tasks and see them here'/> }
                <AddNewTaskBtn />
            </AllTasks>
        </div>
    )
}

export default Uncompleted