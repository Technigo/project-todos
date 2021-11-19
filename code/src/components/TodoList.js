import React from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import styled from 'styled-components/macro'
import { FaTrashAlt } from "react-icons/fa";
import { selectedTasks } from "reducers/todos";

import todos from "reducers/todos"
import NoTasks from "./NoTasks";
import TodoCard from "./TodoCard";
import CounterButtons from "./CounterButtons";


const TodoSection = styled.section`
    color: black;
    width: 90%;
    margin-top: 0;
    min-height: 330px;
    display: flex;
    flex-direction: column;
    font-size: 18px;
    padding: 15px;
    border-radius: 0px 0px 25px 25px;
    background-color: whitesmoke;
    @media (min-width: 768px) {
    min-height: 500px;
    }
    @media (min-width: 992px) {
    min-height: 600px;
    }
`
const TaskCheckbox = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid grey;
    align-items: center;
    margin-bottom: 10px;
`

const CheckboxDelete = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(245,245,245,0.622);
    flex-direction: row;
`
const DeleteButton = styled.button`
    border: none;
    font-size: 23px;
    background-color: rgba(245,245,245,0.622);
    @media (min-width: 768px) {
    font-size: 28px;
    margin-top: -4px;
    }
`
const ButtonsCount = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    margin: 0 auto;
    padding: 0;
`
const Buttons = styled.button`
    padding: 7px 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #d8c1f9;
    color: whitesmoke;
    font-size: 15px;
    min-height: 40px;
    font-weight: bold;
    margin: 10px 0px 20px 5px;
    border: none;
    border-radius: 5px;
    @media (min-width: 768px) {
    font-size: 18px;
    margin-top: 13px;
    }
`


const TodoList = () => {

    const items = useSelector((store) => selectedTasks(store))

    const dispatch = useDispatch()
    const onDeleteTodo = (id) => {
        dispatch(todos.actions.deleteTodo(id))
    }

    return (
        <>
            {items.length < 1 && <NoTasks />}
            {items.length > 0 && (
                <TodoSection>
                    {items.map((item) => (
                        <TaskCheckbox key={item.id}>
                            <TodoCard item={item} />
                            <CheckboxDelete>
                                <DeleteButton
                                    onClick={() => onDeleteTodo(item.id)}>
                                    <FaTrashAlt />
                                </DeleteButton>
                            </CheckboxDelete>
                        </TaskCheckbox>
                    ))}
                    <CounterButtons />
                    <ButtonsCount>
                        <Buttons onClick={() => dispatch(todos.actions.toggleFilter("all"))} >All</Buttons>
                        <Buttons onClick={() => dispatch(todos.actions.toggleFilter("active"))} >Active</Buttons>
                        <Buttons onClick={() => dispatch(todos.actions.toggleFilter("completed"))} >Done</Buttons>
                    </ButtonsCount>
                </TodoSection>
            )}
        </>
    )
}

export default TodoList