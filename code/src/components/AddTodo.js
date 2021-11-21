import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from 'styled-components/macro'
//import the slice itself for dispatch
import todos from "reducers/todos";
import DatePicker from "react-date-picker";
import img from '../assets/calendar.png'

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 10px 15px 10px 15px;
    width: 90%;
    background-color: rgba(245, 245, 245, 0.622);
`
const StyledInput = styled.input`
    width: 60%;
    height: 20px;
    padding: 10px;
    font-size: 18px;
    overflow-wrap: break-word;
    border: 1px solid grey;
    &::placeholder{
        font-size: 16px;
        font-family: 'Yuji Syuku', serif;
        color: grey;
        text-transform: lowercase;
    }
    @media (min-width: 768px) {
        &::placeholder{
            font-size: 16px;
            margin: 0;
        }
    }
    @media (min-width: 992px) {
        &::placeholder{
            font-size: 23px;
        }
    }
`
const StyledInputButton = styled.div` 
    display: flex;
    justify-content: center;
    align-items: center;
`
const StyledDatePicker = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 50px;
    margin-top: 8px;
    margin-bottom: 5px;
    z-index: 15;
    @media (min-width: 992px) {
    max-height: 80px;
    }
`
const StyledDate = styled(DatePicker)`
    width: 60%;
    background-color: rgba(118, 142, 176, 0.72);
    height: 50px;
    color: black;
    margin-left: 10px;
    @media (min-width: 768px) {
        width: 40%;
    }
    @media (min-width: 992px) {
        width: 30%;
        max-height: 80px;
    }
`
const StyledIcon = styled.img`
    width: 50px;
    height: 50px;
    background-color: transparent;
    padding: 0px;
    margin: 0px;
`

const AddTodo = () => {
    const [input, setInput] = useState('')
    const [dueDate, setDueDate] = useState(new Date())
    const [category, setCategory] = useState('')


    const dispatch = useDispatch()
    const onAddTodo = (event, input) => {
        dispatch(todos.actions.addTodo({ input, dueDate, category }))
        // dispatch(todos.actions.toggleFilter("all"))
        event.preventDefault()
        setInput('')
        setDueDate('')
        setCategory('')
    }

    return (
        <StyledForm>
            <div className="select-dropdown">
                <select
                    className="categories"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                >
                    <option disabled value="">Choose category &#x025BE; </option>
                    <option value="Household">Household</option>
                    <option value="Work">Work</option>
                    <option value="Social">Social</option>
                    <option value="Hobbies">Hobbies</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <StyledDatePicker>
                <div>
                    <StyledIcon src={img} alt="calender" />
                </div>
                <StyledDate
                    onChange={(date) => setDueDate(date)}
                    value={dueDate}
                    style={{ background: "white" }}
                />
            </StyledDatePicker>
            <StyledInputButton>
                <StyledInput
                    placeholder="a new task"
                    type="text"
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    maxLength="30"
                />
                <button className="button-55"
                    onClick={(event) => onAddTodo(event, input)}
                    disabled={input < 3}>
                    Add task
                </button>
            </StyledInputButton>

        </StyledForm>
    )
}

export default AddTodo