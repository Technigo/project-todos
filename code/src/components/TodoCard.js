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
    margin-top: 25px;
`

const TodoCard = ({ item }) => {
    const dispatch = useDispatch()
    const onToggleTodo = (id) => {
        dispatch(todos.actions.toggleTodo(id))
    }
    const newData = new Date(item.createdAt)
    // console.log(typeof newData)
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
            <TaskAddedTime>added: {moment(newData).fromNow()}</TaskAddedTime>
        </TaskInfo>
    )

}

export default TodoCard