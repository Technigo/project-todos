import React, {useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    text-align: center;
    `
const Form = styled.form`
    flex-direction: column;
`

const Textarea = styled.textarea`
    margin-top: 20px;
    `
const Input = styled.input`
    margin-top: 20px;
`

//state for input
export const AddTodo = () => {
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState('')

    const handleOnSubmit = e => {
        e.preventDefault()
        //What we add within the curly braces is the payload:
        dispatch(todos.actions.addOne({    
            text: inputValue,
            complete: false
        })
        )

        setInputValue('')
    }

    return (
        <Container>
            <Form onSubmit={handleOnSubmit}>
                <Textarea 
                aria-label="text area"
                type="text"
                rows= "2"
                cols= "30"
                placeholder="What to do next?"
                onChange={e => setInputValue(e.target.value)}
                value={inputValue}
                ></Textarea>
                
                <Input 
                type="submit"
                value="Add Todo"
                ></Input>
            </Form>
        </Container>
    )
} 