import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import  {todos} from '../reducers/todos'
import styled from 'styled-components'
import { useNavigate } from 'react-router'


const Section = styled.header`
    padding:20px;
`
const Form = styled.form`
    display: flex;
    flex-direction:column;
    align-items: center;
    gap:3rem;
`
const SubmitButton = styled.button`
border-radius: 10px;
box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);
display: inline-flex;
align-items: center;
justify-content: center;
width: contend-fit;
padding: 10px;
border: none;
fill: currentColor;
cursor: pointer;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
-moz-appearance: none;
-webkit-appearance: none;
overflow: hidden;
transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),opacity 15ms linear 30ms,transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);
background-color: #017DFF;
color: #fff;
`
const Input = styled.input`
font-family: Roboto, sans-serif;
-moz-osx-font-smoothing: grayscale;
-webkit-font-smoothing: antialiased;
font-size: 1rem;
font-weight: 400;
letter-spacing: .009375em;
text-decoration: inherit;
text-transform: inherit;
align-self: flex-end;
box-sizing: border-box;
width: 100%;
height: 100%;
padding: 20px 16px 6px;
transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
border: none;
border-bottom: 1px solid;
border-radius: 0;
background: none;
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;
cursor:pointer;

&:focus,
&:hover,
&:active {
  text-decoration: none;
  border: none;
  border-bottom: 1px solid;
  color: #017DFF;

  &:placeholder {
      font-style:italic;
  }
}
`
const Select = styled.select`
font-family: Roboto, sans-serif;
-moz-osx-font-smoothing: grayscale;
-webkit-font-smoothing: antialiased;
font-size: 1rem;
font-weight: 400;
letter-spacing: .009375em;
text-decoration: inherit;
text-transform: inherit;
align-self: flex-end;
box-sizing: border-box;
width: 100%;
height: 100%;
padding: 20px 16px 6px;
transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
border: none;
border-bottom: 1px solid;
border-radius: 0;
background: none;
cursor:pointer;

&:focus,
&:hover,
&:active {
  text-decoration: none;
  border: none;
  border-bottom: 1px solid;
  color: #017DFF;
}
`
const Option = styled.option`
font-family: Roboto, sans-serif;
-moz-osx-font-smoothing: grayscale;
-webkit-font-smoothing: antialiased;
font-size: 1rem;
font-weight: 400;
letter-spacing: .009375em;
text-decoration: inherit;
text-transform: inherit;
align-self: flex-end;
box-sizing: border-box;
width: 100%;
height: 100%;
padding: 20px 16px 6px;
transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
border: none;
border-bottom: 1px solid;
border-radius: 0;
background: none;
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;
cursor:pointer;

&:focus,
&:hover,
&:active {
  text-decoration: none;
  border: #017DFF;
  border-bottom: 1px solid;
  color: #017DFF;
}
`
const RadioButtons = styled.div`
    display: flex;
    justify-content: space-evenly;
    width:100%;
`

export const NewTodoInput = () => {
    const navigate = useNavigate()
    const [input, setInput] = useState('')
    const [category, setCategory] = useState('')
    const [priority, setPriority] = useState('')

    const priorityOptions =[
        "Low",
        "Medium",
        "High"
    ]
    const onPriorityChange = (event) => {
        setPriority(event.target.value)
    
    }
    
    const dispatch = useDispatch();

    const onAddTodo = (event) => {
        event.preventDefault()
        dispatch(todos.actions.addTodo([input, category, priority]))
        setInput('')
        navigate(-1)
        
    }

    return (

        <Section>
            <Form onSubmit={onAddTodo}>
            
                <Input placeholder="Add todo here" required type="text" value={input} onChange={event => setInput(event.target.value)}/>
             
                <Select value={category} onChange={event => setCategory(event.target.value)}>
                    <Option value="" disabled hidden>Choose category</Option>
                    <Option value="Hobbies">Hobbies</Option>
                    <Option value="Home">Home</Option>
                    <Option value="Shopping">Shopping</Option>
                    <Option value="Studies">Studies</Option>
                    <Option value="Work">Work</Option>
                </Select>

                <RadioButtons>
                Choose priority:
                    {priorityOptions.map((option) => {
                        return (
                        <label
                            htmlFor={option}
                            key={option}
                        >
                            <input
                            type="radio"
                            name="priority"
                            value={option}
                            checked={priority === option}
                            id={option}
                            onChange={onPriorityChange}
                            />
                            <span>{option}</span>
                        </label>
                        );
                    })}
                  
                </RadioButtons>
                
                <SubmitButton type='submit'>Add task</SubmitButton>
                
            </Form>
        </Section>
    )
}