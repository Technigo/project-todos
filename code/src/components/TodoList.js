import React from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import styled from 'styled-components/macro'
import { FaTrashAlt } from "react-icons/fa";

import todos from "reducers/todos"
import NoTasks from "./NoTasks";
import TodoCard from "./TodoCard";

const TodoSection = styled.section`
    color: black;
    width: 90%;
    margin: 0;
    min-height: 400px;
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
    background-color: rgba(245,245,245,0.622);
`
const DeleteButton = styled.button`
    border: none;
    font-size: 23px;
    background-color: rgba(245,245,245,0.622);
`
const ButtonsCount = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
const Buttons = styled.button`
    padding: 7px 7px;
    display: flex;
    background-color: #768eb0;
    color: whitesmoke;
    font: 14px;
    font-weight: bold;
    margin: 10px 0px 20px 5px;
    border: none;
    border-radius: 5px;
`
const Count = styled.p`
    margin: 0;
`

const TodoList = () => {

    const items = useSelector((store) => store.todos.items)

    const dispatch = useDispatch()
    const onDeleteTodo = (id) => {
        dispatch(todos.actions.deleteTodo(id))
    }
    const onDeleteAllTodo = () => {
        dispatch(todos.actions.deleteAllTodos())
    }
    const onCompleteAllTodo = () => {
        dispatch(todos.actions.completeAllTodos())
    }
    const completed = useSelector((store) => store.todos.items.filter((item) => item.isComplete === true))

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
                    <ButtonsCount>
                        <Buttons onClick={onDeleteAllTodo}>
                            Delete all
                        </Buttons>
                        <Buttons
                            onClick={onCompleteAllTodo}
                            disabled={completed.length === items.length}
                        >
                            Complete all
                        </Buttons>
                    </ButtonsCount>
                    <Count>Completed: {completed.length}/{items.length}</Count>
                </TodoSection>
            )}
        </>
    )
}

export default TodoList