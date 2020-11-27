import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { Tasks } from '../reducer/Tasks';
import { CustomCheckbox } from './CustomCheckbox';

const Article = styled.article`
    display: flex;
    align-items: center;
    justfiy-content: center;
    margin-bottom: 5px;
    background: rgba(255, 255, 255, .8);
    min-width: 100%;
`;

const TaskContainer = styled.div`
    display: flex;
    align-items: center;
    min-width: 290px;
`;

const CheckboxTextContainer = styled.div`
    display: flex;
    align-items: center;   
    margin: 20px;
    width: 190px;
`;

const TaskText = styled.p`
    margin-left: 10px;
    font-family: 'Open Sans', sans-serif;
    font-size: 17px;
    color: rgb(36, 90, 92);
    word-wrap: break-word;
    align-self: flex-start;
`;

const ButtonContainer = styled.div`
    align-self: flex-right;
    background-colour: blue;
    padding: 10px;
`;

const RemoveButton = styled.button`
    background-color: rgb(252, 228, 215);
    border: none;
    font-size: 15px;
    padding: 7px;
    font-family: 'Open Sans', sans-serif;
    color: rgb(36, 90, 92);
    cursor: pointer;
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
        <Article className={`"task-item" ${todoItem.done ? "done" : ""}`}>
            <TaskContainer>
                <CheckboxTextContainer>
                    <CustomCheckbox isChecked={todoItem.done ? "checked" : ""} onChangeHandler={handleOnChange}/>            
                    <TaskText>{todoItem.text}</TaskText>
                </CheckboxTextContainer>
                <ButtonContainer>
                    <RemoveButton onClick={() => onClickRemove(todoItem.id)}>remove</RemoveButton>
                </ButtonContainer>
            </TaskContainer>
        </Article>
    );
};