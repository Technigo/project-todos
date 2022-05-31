import React from "react"
import { useDispatch } from "react-redux"

import taskitems from "reducers/taskitems"
import { StyledFilter, StyledSelect } from "styles/StylesForComponents"


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
