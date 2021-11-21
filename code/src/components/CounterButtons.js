import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components/macro'
import todos from "reducers/todos"

const CountButtons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
`
const CountContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: -10px;
    justify-content: center;
    align-items: center;
    padding: 0;
    color: #243f65bc;
    font-size: 15px;
    font-weight: bold;
    padding: 5px;
    font-family: 'Yuji Syuku', serif;
    @media (min-width: 768px) {
    font-size: 23px;
    }
`
const ButtonsCount = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
`
const Buttons = styled.button`
    padding: 7px 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #768eb0;
    color: whitesmoke;
    font-size: 11px;
    font-weight: bold;
    margin: 10px 0px 20px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background-color: #5f417f;
    }
    @media (min-width: 768px) {
    font-size: 18px;
    margin-top: 13px;
    }
`

const CounterButtons = () => {
    const items = useSelector((store) => store.todos.items)
    const completed = useSelector((store) => store.todos.items.filter((item) => item.isComplete === true))
    const dispatch = useDispatch()

    const onDeleteAllTodo = () => {
        dispatch(todos.actions.deleteAllTodos())
    }
    const onCompleteAllTodo = () => {
        dispatch(todos.actions.completeAllTodos())
    }

    return (
        <CountButtons>
            <CountContainer>
                Done: {completed.length}/{items.length}
            </CountContainer>
            {items.length > 1 && (
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
            )}
        </CountButtons>
    )
}

export default CounterButtons