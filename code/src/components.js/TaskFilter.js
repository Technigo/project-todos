import React from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"

import taskitems from "reducers.js/taskitems"

const StyledFilter = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 0 2rem;

    @media screen and (min-width: 1024px) {
        margin: 0 2rem 0.5rem;
    }
`
const StyledSelect = styled.select`
    border-radius: 10px;
    background: transparent;
    padding: 3px;
    color: whitesmoke;
    width: 80px;

    &:focus {
        border: 2px solid #e3c5f4;
        outline: none;
    }

    @media screen and (min-width: 1024px) {
        width: 150px;
    }
`

const TaskFilter = () => {
    const options = ["Sort by", "Date", "Priority", "Uncompleted"]

    const dispatch = useDispatch()

    const onOptionChange = (event) => {
        dispatch(taskitems.actions.sortTasks(event.target.value))
    }

    return (
        <StyledFilter>
                <StyledSelect onChange={onOptionChange} required>
                    {options.map(option => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </StyledSelect>
        </StyledFilter>
     
    )
}

export default TaskFilter
