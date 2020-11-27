import React from 'react';
import { useDispatch } from 'react-redux';

import { Tasks } from '../reducer/Tasks';
import { CustomCheckbox } from './CustomCheckbox';
import { Article, TaskContainer, CheckboxTextContainer, TaskText, ButtonContainer, RemoveButton } from '../styled-components/Item';

export const TaskItem = ({ item }) => {
    // The below useSelector directly get's the task based on the index number of the task from the array: items - will get the most recent task to replace the one that was shown before it. 

    const dispatch = useDispatch();

    //Function to remove tasks using the task id
    const onClickRemove = id => {
        dispatch(Tasks.actions.removeTask(id));        
    };

    // Function to handle the done status - When the user marks the task as checked or unchecked the onChange will call the handleOnChange function. This will then dispatch an action to the setDone reducer using the payload. It targets the id of the task checked or not checked and set's the done to not done. Once the setDone reducer is called it will perform an action to compare the checked task id and assign the object property done on that id to true.
    const handleOnChange = () => {
        dispatch(
            Tasks.actions.setDone({
                itemId: item.id,
                done: !item.done
            })
        );        
    };

    return (
        <Article>
            <TaskContainer>
                <CheckboxTextContainer>
                    <CustomCheckbox isChecked={item.done} onChangeHandler={handleOnChange}/>            
                    <TaskText tabIndex="0" className={` ${item.done ? "done" : ""}`}>{item.text}</TaskText>
                </CheckboxTextContainer>
                <ButtonContainer>
                    <RemoveButton onClick={() => onClickRemove(item.id)}>Remove</RemoveButton>
                </ButtonContainer>
            </TaskContainer>
        </Article>
    );
};