import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { Tasks } from '../reducer/Tasks';
import { CustomCheckbox } from './CustomCheckbox';

const TaskContainer = styled.article`
    display: flex;
    align-items: center;
    justfiy-content: space-between;
    margin-bottom: 5px;
    background: rgba(255, 255, 255, .8);
    width: 100%;
`;

const TaskText = styled.p`
    margin-left: 10px;
    font-family: 'Sacramento', cursive;
    font-size: 30px;
    color: rgb(36, 90, 92);
`;

const RemoveButton = styled.button`
    background-color: rgb(255, 255, 255);
    margin-left: 20px;
    border: none;
    border-radius: 50%;
    font-size: 20px;
    color: rgb(36, 90, 92);
    padding: 3px 11px;
    cursor: pointer;
    border: 2px solid rgb(36, 90, 92);
`;

export const TaskItem = ({ todoItem, itemIndex }) => {
    // The below useSelector directly get's the task based on the index number of the task from the array: items - will get the most recent task to replace the one that was shown before it. 
    const item = useSelector((state) => state.tasks.list.items[itemIndex]);

    const dispatch = useDispatch();

    //Function to remove tasks using the task id
    const onClickRemove = id  => {
        dispatch(Tasks.actions.removeTask(id));        
    };

    // Function to handle the done status - When the user marks the task as "checked" the onChange will call the handleOnChange function. This will then dispatch an action to the setDone reducer using the payload. It targets the index number of the task "checked" and check if it's not done. If the task isn't done then the setDone reducer will update the specific task in the items array to done.
    const handleOnChange = () => {
        dispatch(
            Tasks.actions.setDone({
                itemIndex: itemIndex,
                done: !item.done
            })
        );        
    };

    return (
        <TaskContainer className={`"task-item" ${todoItem.done ? "done" : ""}`}>
            <div>
                <CustomCheckbox isChecked={todoItem.done ? "checked" : ""} onChangeHandler={handleOnChange}/>
            </div>
            <TaskText>{todoItem.text}</TaskText>
            <RemoveButton onClick={() => onClickRemove(todoItem.id)}>-</RemoveButton>
        </TaskContainer>
    );
};