import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import todos from 'reducers/store';
import styled from 'styled-components'

const Complete = styled.input`
  -webkit-appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 2px solid #e4fd81;
  margin-right: 20px;
  background: ${(props) => (props.checked ? '#e4fd81' : 'white')};
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
  background:#ffc;
  display:flex;
  flex-direction: column; 
  height:13em;
  width:13em;
  padding:1em;
  margin: 2em; 
  box-shadow: 5px 5px 7px rgba(33,33,33,.7);
  position:relative; 
`
const Heading = styled.h4`
padding-bottom: 10px;
padding-top: 10px;  `

const TodoText = styled.p`
height: 50%; 
width: 50%;  `

const Posted = styled.p`
top: 0; 
opacity: 0.8; 
`
const DueDate = styled.p`
margin-bottom: 10px; 
`

const DeleteBtn = styled.button`
width: 50px; 
height: 15px; 
position: absolute;
bottom: 20px; 
right: 0px;   
`

const TodoList = () => {
  const items = useSelector((store) => store.todos.items);
  /*   const doneTodos = useSelector((store) => store.todos.items.completed);
  const delted = useSelector((store) => store.todos.deleteTodo);
  console.log(delted)
  console.log(doneTodos) */
  const dispatch = useDispatch();

  const onToggleTodoList = (todoId) => {
    dispatch(todos.actions.toggleTodo(todoId));
  }

  const onDeleteTodo = (id) => {
    dispatch(todos.actions.deleteTodo(id));
  }

  return (
    <Container>
      {items.map((item, index) => (
        <Todo
          key={item.id}
          className={index === todos.yesterday ? 'correct' : 'late'}>

          <Posted>Posted: {item.postedTime}</Posted>
          <Heading>Todo</Heading>
          <TodoText>{item.name}</TodoText>
          <DueDate>Due date: {item.date}</DueDate>
          <Complete
            type="checkbox"
            checked={item.completed}
            onChange={() => onToggleTodoList(item.id)} />
          <DeleteBtn
            type="button"
            onClick={() => onDeleteTodo(item.id)}> deleted
          </DeleteBtn>

        </Todo>
      ))}
    </Container>
  )
}

export default TodoList