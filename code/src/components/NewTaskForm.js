import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { tasks } from '../reducers/tasks'

export const NewTaskForm = () => {

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
                <AddTaskTitle>Add new tasks</AddTaskTitle>
                <Form onSubmit={onFormSubmit}>
                    <InputField 
                        type='text'
                        placeholder='Type here'
                        value={value}
                        onChange={(event) => setValue(event.target.value)}
                    />
                    <ButtonAdd type='submit'>Add</ButtonAdd>
                </Form>
            </FormSection>
        </>
    )
}

const FormSection = styled.section`
    display: flex;
    flex-direction: column;
    margin: 10px 20px 20px 20px;
    // background-color: green;
    @media (min-width: 768px) {
        margin: 30px 140px 20px 140px;
    }
    @media (min-width: 992px) {
        width: 600px; 
    }
    
`
const AddTaskTitle = styled.p`
    color: #0F1A84;
    font-size: 18px;
    font-weight: bold;
    margin: 4px 10px 20px 4px;
`

const Form  = styled.form`
      display: flex;
      flex-direction: column;
`

const InputField  = styled.input`
    border: solid 1px #0F1A84;
    height: 100px;
    margin: 0;
    padding-left: 10px;
    @media (min-width: 992px) {
        height: 150px; 
    }
    
`
const ButtonAdd = styled.button`
    border: solid 1px #97A9C9;
    background-color: #97A9C9;
    color: #0F1A84;
    width: 80px;
    height: 45px;
    border-radius: 10px;
    margin-top: 20px;
    font-size: 22px;
`


