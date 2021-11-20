import React from "react"
import { useSelector, useDispatch } from "react-redux"
import todos from "reducers/todos"
import styled, { keyframes } from "styled-components/macro"
import deleteIcon from "../assets/delete-icon.png"

const TodoListContainer = styled.section`
    position: absolute;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    width: 90vw;
    top: 48vh;
    left: 5vw;
    bottom: -25vh;
`;

const TodosContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    column-gap: 5px;
    padding: 5px;
    line-break: anywhere;
    background-color: #FCF9F07e;
    border-radius: 5px;
`;

const jellyAnimation = keyframes`
  from { transform scale(1, 1) }
  30% { transform scale(1.25, 0.75) }
  40% { transform scale(0.75, 1.25) }
  50% { transform scale(1.15, 0.85) }
  65% { transform scale(.95, 1.05) }
  75% { transform scale(1.05, .95) }
  to { transform scale(1, 1) }
`;

const EmptyLabel = styled.label`
  position: relative;
  width: 17px;
  height: 17px;
  border: 1px solid #4a4737;
  border-radius: 10px;
  vertical-align: middle;
  transition: background .1s ease;
  cursor: pointer;
  &:after {
    position: absolute;
    top: 1px;
    left: 5px;
    width: 5px;
    height: 11px;
    opacity: 0;
    transform: rotate(45deg) scale(0);
    border-right: 2px solid white;
    border-bottom: 2px solid white;
    transition: all .3s ease;
    transition-delay: .15s;
  }
`;

const StyledTodoText = styled.label`
  cursor: pointer;
`;

const Checkbox = styled.input`
  display: none;
   &:checked ~ ${StyledTodoText} {
       text-decoration: line-through;
   }   
   &:checked ~ ${EmptyLabel} {
    border-color: transparent;
    background: #4a4737;
    animation: ${jellyAnimation} .6s ease;
  }
   &:after {
    opacity: 1;
    transform: rotate(45deg) scale(1);
    }
 `;

const StyledDate = styled.p`
    font-size: 12px;
`;

const DeleteButton = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    padding: 0;
`;

const DeleteButtonIcon = styled.img `
    width: 35px;
    transition: .5s ease-in-out;
        &:hover{
            transform: scale(1.1);
        }
`;

const InputAndText = styled.div`
    display: flex;
    align-items: center;
    column-gap: 5px;
`;

const DateAndButton = styled.div`
    display: flex;
    justify-content: space-between;
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
        <TodoListContainer>
            {items.map((item) => (
                <TodosContainer key={item.id}>
                    <InputAndText>
                        <Checkbox id={item.id} type="checkbox" checked={item.isComplete} onChange={() => onToggleTodo(item.id)} />
                        <EmptyLabel htmlFor={item.id}></EmptyLabel>
                        <StyledTodoText htmlFor={item.id}>{item.text}</StyledTodoText>
                    </InputAndText>
                    <DateAndButton>
                        <StyledDate>Created on: {item.timePosted}</StyledDate>
                        <DeleteButton onClick={() => onDeleteTodo(item.id)}><DeleteButtonIcon src={deleteIcon} /></DeleteButton>
                    </DateAndButton>
                </TodosContainer>
            ))}
        </TodoListContainer>
        </>
    )
}

export default TodoList