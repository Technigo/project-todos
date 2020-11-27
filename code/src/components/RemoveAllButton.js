import React from 'react';
import { useDispatch } from 'react-redux';

import { Tasks } from '../reducer/Tasks';
import { RemoveTasksButton } from '../styled-components/RemoveButton';

export const RemoveAllButton = () => {

    const dispatch = useDispatch();

    const onClearAllTasks = () => {
        dispatch(Tasks.actions.clearAllTasks())
    };

    return (
        <>
            <RemoveTasksButton onClick={onClearAllTasks}>
                Remove all                  
            </RemoveTasksButton>
        </>
    );
};