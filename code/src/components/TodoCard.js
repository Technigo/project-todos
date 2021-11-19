import React from "react";
import styled from 'styled-components/macro'
import { useDispatch } from "react-redux"
import todos from "reducers/todos"
import moment from "moment";

const TaskInfo = styled.div`
    display: flex;
    margin: 0px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`
const TaskAddedTime = styled.p`
    font-size: 13px;
    margin-top: 30px;
    margin-bottom: 3px;
    font-family: 'Yuji Syuku', serif;
    @media (min-width: 768px) {
    font-size: 17px;
    margin-top: 35px;
    }
    @media (min-width: 992px) {
    font-size: 19px;
    }
`
const DueText = styled.p`
    margin: 3px 0px 0px 0px;
    padding: 0;
    font-size: 13px;
    font-weight: bold;
    font-family: 'Yuji Syuku', serif;
    @media (min-width: 768px) {
    font-size: 15px;
    }
    @media (min-width: 992px) {
    font-size: 17px;
    }
`
const StyledCategory = styled.p`
    margin: 0;
    font-size: 13px;
    font-weight: bold;
    font-family: 'Yuji Syuku', serif;
    ${props => props.category === "Household"
        ? `color: green`
        : props.category === "Work"
            ? `color: blue`
            : props.category === "Social"
                ? `color: palevioletred`
                : props.category === "Hobbies"
                    ? `color: purple`
                    : `color: #ae9ac7`};
    @media (min-width: 768px) {
    font-size: 17px;
    }
    @media (min-width: 992px) {
    font-size: 19px;
    }
`


const TodoCard = ({ item }) => {
    const dispatch = useDispatch()
    const onToggleTodo = (id) => {
        dispatch(todos.actions.toggleTodo(id))
    }
    const newData = new Date(item.createdAt)
    // console.log(typeof newData)
    const newDueDate = moment(new Date(item.dueDate)).format("MMM Do YYYY")
    const currentDate = moment().format("MMM Do YYYY");

    // console.log('current', currentDate)
    // console.log('Due', newDueDate)
    return (
        <TaskInfo>
            <div className="box">
                <label className={item.isComplete === true ? 'todo-done' : 'todo-not'}>
                    <input
                        id="in"
                        type="checkbox"
                        checked={item.isComplete}
                        onChange={() => onToggleTodo(item.id)} />
                    <span className="check"></span>
                    {item.text}
                </label>
            </div>
            <TaskAddedTime>
                added: {moment(newData).fromNow()}
            </TaskAddedTime>
            <StyledCategory category={item.category}>
                category: {item.category ? item.category : 'other'}
            </StyledCategory>
            {item.dueDate ? (<DueText
                style={{
                    color: currentDate >= newDueDate
                        ? "red"
                        : "#385a8bbc",
                    textDecoration: "underline"
                }}
            >Due: {newDueDate}
            </DueText>) : ""}
        </TaskInfo >
    )

}

export default TodoCard
