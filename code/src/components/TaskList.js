import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components';

import tasks from "reducers/tasks";

const OutterContainer = styled.section`
    min-height: 3rem;
    font-family: 'Poppins', sans-serif;
`
const NewTaskStyling = styled.article`
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 5px;
    position: relative;
    font-size: 18px;
    font-weight: small;
    line-height: 1.8rem;
    border-bottom: 1px solid  #3b3838;
    font-weight: 300;
`
const DeleteButton = styled.button`
    position: absolute;
    top: 10px;
    right: 7px;
    background: none;
    border: none; 
    cursor: pointer; 
` 
const RemoveAllBtn = styled.button`
    background: #B8E4F0;
    padding: 0.3rem;
    font-size: 16px;
    margin-top: 1rem;
    border-radius: 5px;
    border: none;
    border-style: outset;
    margin-left: 125px;
`

const TaskList = () => {
    const taskList = useSelector((store) => store.tasks.items);

    const dispatch = useDispatch();
    const onTaskToggle = (id) => {
        dispatch(tasks.actions.toggleTask(id));
    };

    const onDelete = (taskIndex) => {
        dispatch(tasks.actions.deleteTask(taskIndex));
    };

    const onRemoveAll = () => {
        dispatch(tasks.actions.removeAll())
    }

    return (
        <section>
            <OutterContainer>
            {taskList.map((task) => (
                <NewTaskStyling key={task.id}>
                    <input
                        type='checkbox' 
                        checked={task.isComplete}
                        onChange={()=>onTaskToggle(task.id)} />
                    <label>
                        &nbsp;{task.text}
                    </label>
                    <DeleteButton onClick={()=> onDelete(task.id)}>
                        <span role='img' aria-label='delete'>✖️</span>    
                    </DeleteButton>                
                </NewTaskStyling>
            ))}
            </OutterContainer>
            <RemoveAllBtn onClick={onRemoveAll}>clear list</RemoveAllBtn>
        </section>
    )
};

export default TaskList;
