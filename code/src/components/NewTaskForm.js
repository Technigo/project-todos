import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from '../reducers/tasks'
import styled from 'styled-components'

export const NewTaskForm = () => {

    const FormSection = styled.section`
        display: flex;
        flex-direction: column;
        margin: 20px;
`
    const InputField  = styled.input`
        border: solid 1px #0F1A84;
        width: 250px;
        height: 50px;
        margin-right: 10px;
`
    const ButtonAdd = styled.button`
        border: solid 1px #97A9C9;
        background-color: #97A9C9;
        color: #0F1A84;
        width: 80px;
        height: 45px;
        border-radius: 10px;
        margin-top: 15px;
        font-size: 22px;
`
    const [value, setValue] = useState ('')

    const dispatch = useDispatch()

    const onFormSubmit = (event) => {
        event.preventDefault()
        dispatch(tasks.actions.addTask(value))
        setValue('')
    }

    return (
        <>
            <FormSection>
                <p>Add new tasks</p>
                <form onSubmit={onFormSubmit}>
                    <InputField 
                        type='text'
                        value={value}
                        onChange={event => setValue(event.target.value)}
                        />
                    <ButtonAdd type='submit'>Add</ButtonAdd>
                </form>
            </FormSection>
        </>
    )
}


