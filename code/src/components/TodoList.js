import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import todos from 'reducers/store';
import styled from 'styled-components';

const Complete = styled.input`
  -webkit-appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 2px solid #e4fd81;
  margin-right: 20px;
  background: ${(props) => (props.checked ? 'black' : 'white')};
  position: absolute;
  bottom: 10px; 
  right: 25px;
`;

const Container = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  grid-column: span 2; 
  padding-top: 2em;
  background-color: white; 
`

const Todo = styled.div`
 text-decoration:none;
  color:#000;
  display:flex;
  flex-direction: column; 
  height:13em;
  width:13em;
  padding:1em;
  margin: 2em; 
  box-shadow: 5px 5px 7px rgba(33,33,33,.7);
  position:relative; 
/*   &:hover{
    width: 110%; 
    height: 110%; 
  } */
`
const Heading = styled.h4`
padding-bottom: 10px;
padding-top: 10px;
font-family: 'Reenie Beanie';
font-weight: bold; 
font-size: 25px; `

const TodoText = styled.p`
font-family:  'montserrat';
font-size: 2rem; 
height: 50%; 
width: 50%;  `

const Posted = styled.p`
top: 0; 
opacity: 0.8; 
font-family: 'montserrat';
`
const DueDate = styled.p`
margin-bottom: 10px;
font-family: 'montserrat'; 
`

const DeleteBtn = styled.div`
width: 50px; 
height: 15px; 
position: absolute;
bottom: 20px; 
right: -18px;
  
`

const BtnContainer = styled.div`
display: flex; 
flex-direction: flex-end; `

const TimeStampContainer = styled.div`
display:inline-block; 
font-size: 12px;
position: absolute;
bottom: 0; 
left: 10px; `

const TodoList = () => {
  const items = useSelector((store) => store.todos.items);
  const dispatch = useDispatch();

  const onToggleTodoList = (todoId) => {
    dispatch(todos.actions.toggleTodo(todoId));
  }

  const onDeleteTodo = (id) => {
    dispatch(todos.actions.deleteTodo(id));
  }

  const colors = ['lightgreen', 'green', 'blue', 'lightblue', 'purple', 'orange'];

  return (
    <Container>
      {items.map((item, i) => (
        <Todo
          key={item.id}
          style={{ backgroundColor: colors[i] }}>
          <Heading>Todo</Heading>
          <TodoText>{item.name}</TodoText>
          <TimeStampContainer>
            <Posted>Posted: {item.postedTime}</Posted>
            <DueDate>Due date: {item.date}</DueDate>
          </TimeStampContainer>
          <BtnContainer>
            <Complete
              type="checkbox"
              checked={item.completed}
              onChange={() => onToggleTodoList(item.id)} />
            <DeleteBtn
              type="button"
              onClick={() => onDeleteTodo(item.id)}> ❌
            </DeleteBtn>
          </BtnContainer>
        </Todo>
      ))}
    </Container>
  )
}

export default TodoList