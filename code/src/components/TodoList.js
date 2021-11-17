import React from "react"
import { useSelector, useDispatch } from "react-redux"
import todos from "reducers/todos"
import styled from "styled-components/macro";

const StyledSection = styled.section`
background-color: #143c55c0;
border-radius: 5px;
position: absolute;
top: 25vh;
left: 5vw;
`;

const TodosContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
column-gap: 5px;
width: 90vw;

`;

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
        <>
        <StyledSection>
            {items.map((item) => (
                <TodosContainer key={item.id}>
                    <input type="checkbox" checked={item.isComplete} onChange={() => onToggleTodo(item.id)} />
                    <p>{item.text}</p>
                    <p>{item.timePosted}</p>
                    <button onClick={() => onDeleteTodo(item.id)}>-</button>
                </TodosContainer>
            ))}
        </StyledSection>
        </>
    )
}

export default TodoList