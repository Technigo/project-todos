import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const AddClothes = () => {
    const [inputValue, setInputValue] = useState('')
    const dispatch = useDispatch()
    const onFormSubmit = (event) => {
        event.preventDefault();
        const newClothes = {
            id: Date.now().toString(),
            name: inputValue.toUpperCase(),
            
        }
    }
}