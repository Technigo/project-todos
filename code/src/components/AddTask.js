import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const AddTask = () => {
    const [inputValue, setInputValue] = useState('')
    const dispatch = useDispatch()
    const onFormSubmit = (event) => {
        event.preventDefault();
        const newTask = {
            id: Date.now().toString(),
            name: inputValue.toYpperCase(),
            
        }
    }
}