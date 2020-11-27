import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Tasks } from '../reducer/Tasks';
import { CustomCheckbox } from './CustomCheckbox';
import { Article, TaskContainer, CheckboxTextContainer, TaskText, ButtonContainer, RemoveButton } from '../styled-components/Item';

export const TaskItem = ({ todoItem, itemIndex }) => {
    // The below useSelector directly get's the task based on the index number of the task from the array: items - will get the most recent task to replace the one that was shown before it. 
    const item = useSelector((state) => state.tasks.list.items[itemIndex]);

    const dispatch = useDispatch();

    //Function to remove tasks using the task id
    const onClickRemove = id => {
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
        <Article>
            <TaskContainer>
                <CheckboxTextContainer>
                    <CustomCheckbox isChecked={todoItem.done ? "checked" : ""} onChangeHandler={handleOnChange}/>            
                    <TaskText tabIndex="0" className={` ${todoItem.done ? "done" : ""}`}>{todoItem.text}</TaskText>
                </CheckboxTextContainer>
                <ButtonContainer>
                    <RemoveButton onClick={() => onClickRemove(todoItem.id)}>Remove</RemoveButton>
                </ButtonContainer>
            </TaskContainer>
        </Article>
    );
};