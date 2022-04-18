import React from "react"
import styled from "styled-components"


const PriorityItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 1rem 0 2rem;

    @media screen and (min-width: 1024px) {
        margin: 2rem 0 3rem;
    }
`

const PriorityTitle = styled.p`
    font-size: 0.9rem;

    @media screen and (min-width: 1024px) {
        font-size: 1.1rem;
        margin-bottom: 5px;
    }
`

const PriorityButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`

const PriorityButton = styled.button`
    appearance: none;
    border: 1px solid;
    border-color: transparent;
    margin: 10px 10px 0 0;
    padding: 5px;
    border-radius: 10px;
    font-size: 0.8rem;
    width: 60px;

    &:hover,
    &:active,
    &:focus {
        outline: none;
        border-color: purple;
    }

    @media screen and (min-width: 1024px) {
        margin: 10px 15px 0 0;
        width: 70px;
        font-size: 0.9rem;
    }
`

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
