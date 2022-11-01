import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';

const addTask = () => {
    const [todo, setTodo] = useState('')
    const dispatch = useDispatch()

    const onAddTask = () => {
        dispatch(tasks.actions.addTask)
        setTodo('')
    }
    
    return (

    )
}