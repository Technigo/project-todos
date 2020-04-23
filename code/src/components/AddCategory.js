import React, { useState } from "react"
import { useDispatch } from 'react-redux'
import { todos } from '../reducers/todos'
import { InputForm, TextInput, PostButton } from '../lib/InputForm'



export const AddCategory = () => {
    const [newCategory, setNewCategory] = useState()
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(
            todos.actions.addCategory({ itemInfo: { name: newCategory, reveal: false, items: [] } })
        )
        setNewCategory('')
    }


    return (
        <InputForm onSubmit={(event) => handleSubmit(event)}>
            <PostButton type="submit">+</PostButton>
            <TextInput maxLength={15} value={newCategory} placeholder="Add new category" onChange={(event) => setNewCategory(event.target.value)}></TextInput>
        </InputForm>
    )
}