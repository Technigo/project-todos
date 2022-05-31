import React from "react"

import {
    PriorityItem,
    PriorityTitle,
    PriorityButtonContainer,
    PriorityButton } from "styles/StylesForComponents"


const TaskItemPriority = ({ priority, setPriority }) => {
    const priorities = [ "Urgent", "Normal", "Low"]

    const handlePriorityChange = (event) => {
        setPriority(event.target.value)
    }

    return (
        <PriorityItem>
            <PriorityTitle>Priority level:</PriorityTitle>

            <PriorityButtonContainer>
                {priorities.map(item => (
                    <PriorityButton
                    key={item}
                    className={item === "Urgent" ? "urgent-tag"
                    : item === "Normal" ? "normal-tag"
                    : item === "Low" ? "low-tag"
                    : ""}
                    value={item}
                    onClick={(e) => handlePriorityChange(e)}>
                        {item}
                    </PriorityButton>
                ))}
            </PriorityButtonContainer>
        </PriorityItem>

    )
}

export default TaskItemPriority
