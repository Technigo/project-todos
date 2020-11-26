import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import moment from 'moment';
import styled from 'styled-components';
import { todos } from '../reducers/todos';
import { Image } from '../lib/Image';
import { TodoParagraph } from '../lib/Text';
import CustomCheckbox from '../lib/CustomCheckbox';

const TodoItem = ({ item }) => {
  const [active, setActive] = useState('');
  //const [height, setHeight] = useState('0px');
  const dispatch = useDispatch();

  const handleRemoveTodo = () => {
    dispatch(
      todos.actions.removeTodo({
        id: item.id,
      })
    );
  };
  
  const toggleComplete = () => {
    dispatch(todos.actions.setComplete(item.id));
  };

  const toggleAccordion = () => {
    setActive(active === '' ? 'active' : '');
    //setHeight(active === 'active' ? '0px' : 'auto');
  };

  return (
    <Container>
      <MyTodos className={`accordion ${active}`} onClick={toggleAccordion}>
        <label>
        <CustomCheckbox
          checked={item.complete ? true : ""}
          onChange={toggleComplete}
        ></CustomCheckbox>
        </label>
        <TodoContainer>
          <Description checked={item.complete ? true : ''}>
              {item.description}
          </Description> 
        </TodoContainer>
        <Image src="../assets/garbage.svg" onClick={handleRemoveTodo} /> 
      </MyTodos>

      {/* <Open style={{ height: `${height}` }}> */}
      <Open active={active}>
        <TodoParagraph><Span>Category:</Span> {item.category}</TodoParagraph>
        <TodoParagraph><Span>Created:</Span> {moment(item.createdAt).fromNow()}</TodoParagraph>
        <TodoParagraph><Span>Due:</Span> {moment(item.dueDate).format('MMM Do YYYY')}</TodoParagraph>
      </Open>
    </Container>
  );
};
export default TodoItem;

const Container = styled.div`
`;

export const MyTodos = styled.li `
  width: 100%;
  background-color: transparent; 
  border: none;
  border-bottom: 1px solid #3d5f6b;
  display: flex;
  align-items: center;
  font-family: 'Architects Daughter', cursive;
  font-size: 16px;
  padding: 10px;
`;

const TodoContainer = styled.div `
  width: 100%;  
  display: flex;
  justify-content: space-between;  
  flex-direction: column; 
  align-items: flex-start;
  margin-left: 10px;
    &:checked + ${TodoParagraph} {
      text-decoration: line-through;
    }
`;

const Description = styled.p`
  color: #000;
  ${({ checked }) => 
    checked && `
    opacity: 0.3;
    `
  }   
}
`;

const Open = styled.div`
  padding: 4px;
  overflow: hidden;
  height: 0;
  ${({ active }) =>
    active === 'active' &&
    `
    height: auto;
  `}
`;

const Span = styled.span`
  font-weight: bold;
`;