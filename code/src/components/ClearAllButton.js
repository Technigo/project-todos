import React from 'react';
import { useDispatch } from 'react-redux';

import { Tasks } from '../reducer/Tasks';
import { ClearTasksButton } from '../styled-components/ClearButton';

export const ClearAllButton = () => {

    const dispatch = useDispatch();

    const onClearAllTasks = () => {
        dispatch(Tasks.actions.clearAllTasks())
    };

    return (
        <>
            <ClearTasksButton onClick={onClearAllTasks}>
                Clear all                  
            </ClearTasksButton>
        </>
    );
};