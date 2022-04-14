import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components';

import tasks from "reducers/tasks";

const TaskOutterContainer = styled.section`
    min-height: 3rem;
    font-family: 'Poppins', sans-serif;
`
const TaskStyling = styled.article`
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 5px;
    position: relative;
    font-size: 16px;
    font-weight: small;
    line-height: 1.8rem;
    border-bottom: 1px solid #dcdcdc;
    font-weight: 300;
`

const TaskText = styled.article`
    font-weight: 500;
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
    // margin-left: 250px;
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
            <TaskOutterContainer>
            {taskList.map((task) => (
                <TaskStyling key={task.id}>
                    <TaskText>{task.text}</TaskText>
                    <label>
                        completed:
                        <input
                            className='checkbox' 
                            type='checkbox' 
                            checked={task.isComplete}
                            onChange={()=>onTaskToggle(task.id)} />
                    </label>
                    <DeleteButton onClick={()=> onDelete(task.id)}>
                        <span role='img' aria-label='delete'>✖️</span>    
                    </DeleteButton>                
                </TaskStyling>
            ))}
            </TaskOutterContainer>
            <RemoveAllBtn onClick={onRemoveAll}>clear list</RemoveAllBtn>
        </section>
    )
};

export default TaskList;
