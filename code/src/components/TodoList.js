import React from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";

import todos from "reducers/todos"
import NoTasks from "./NoTasks";

const TodoSection = styled.section`
    background-color: whitesmoke;
    color: black;
    width: 100%;
    display: flex;
    flex-direction: column;
    font-size: 18px;
`
const Main = styled.div`
    background-color: whitesmoke;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    padding: 15px;
    border-radius: 0px 0px 25px 25px;
`
const TaskCheckbox = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid black;
    align-items: center;
`
const TaskInfo = styled.div`
    display: flex;
    margin: 0px;
    flex-direction: column;
`
const TaskText = styled.p`
    font-size: 15px;
    margin: 0px;
`
const CheckboxDelete = styled.div`
    display: flex;
    align-items: center;
`
const DeleteButton = styled.button`
    border: none;
    font-size: 25px;
    background-color: whitesmoke;
`

const TodoList = () => {

    const items = useSelector((store) => store.todos.items)

    const dispatch = useDispatch()
    const onToggleTodo = (id) => {
        dispatch(todos.actions.toggleTodo(id))
    }
    const onDeleteTodo = (id) => {
        dispatch(todos.actions.deleteTodo(id))
    }

    return (
        <Main>
            {items.length < 1 && <NoTasks />}
            <TodoSection>
                {items.map((item) => (
                    <>
                        <TaskCheckbox key={item.id}>
                            <TaskInfo>
                                <div className="box">
                                    <input
                                        id="one"
                                        type="checkbox"
                                        checked={item.isComplete}
                                        onChange={() => onToggleTodo(item.id)} />
                                    <span className="check"></span>
                                    <label className={item.isComplete === true ? 'todo-done' : 'todo-not'} htmlFor="one">{item.text}</label>
                                </div>
                                <TaskText>added: {item.createdAt}</TaskText>
                            </TaskInfo>
                            <CheckboxDelete>
                                <DeleteButton
                                    onClick={() => onDeleteTodo(item.id)}>
                                    <FaTrashAlt />
                                </DeleteButton>
                            </CheckboxDelete>
                        </TaskCheckbox>
                        <div>
                            here will be completed or not
                        </div>
                    </>
                ))}
            </TodoSection>
        </Main>
    )
}

export default TodoList