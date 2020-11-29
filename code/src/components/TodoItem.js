import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import styled from 'styled-components';

import { todos } from '../reducers/todos';
import CustomCheckbox from './CustomCheckbox';

const TodoItem = ({ item }) => {
  const [active, setActive] = useState('');

  const dispatch = useDispatch();

  const onRemoveTodo = () => {
    dispatch(
      todos.actions.removeTodo({
        id: item.id,
      })
    );
    console.log(item.id);
  };

  const handleOnChange = event => {
    dispatch(todos.actions.setComplete(item.id));
  };

  const toggleAccordion = () => {
    setActive(active === '' ? 'active' : '');
  };

  return (
    <ItemWrapper onClick={toggleAccordion}>
      <CheckboxLabel>
        <CustomCheckbox
          checked={item.isComplete ? true : ''}
          onChange={handleOnChange}
        ></CustomCheckbox>
      </CheckboxLabel>
      <Item>
        <ItemContainer>
          <div>
            <ItemDescription isComplete={item.isComplete}>
              {item.description}
            </ItemDescription>
            <ItemCategory isComplete={item.isComplete}>
              {item.category}
            </ItemCategory>
          </div>
          {(item.isComplete || active) && (
            <ItemImage src="../assets/cancel.svg" onClick={onRemoveTodo} />
          )}
        </ItemContainer>
        <ItemAccordion active={active}>
          <ItemDate isComplete={item.isComplete}>
            Created: {moment(item.createdAt).fromNow()}
          </ItemDate>
          <ItemDate isComplete={item.isComplete}>
            Due: {moment(item.dueDate).format('MMM Do YYYY')}
          </ItemDate>
        </ItemAccordion>
      </Item>
    </ItemWrapper>
  );
};

export default TodoItem;

const ItemWrapper = styled.article`
  display: flex;
`;

const CheckboxLabel = styled.label`
  margin: 10px 10px 0 0;
`;

const Item = styled.section`
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.5px solid lightgray;
  border-bottom: 1.5px solid rgb(230, 230, 230);
  width: 100%;

  &:hover {
    background: rgba(0, 0, 0, 0.02);
  }
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const ItemDescription = styled.p`
  color: #404040;
  word-break: break-word;

  ${({ isComplete }) =>
    isComplete &&
    `
    color: #b0b0b0; 
  `}
`;

const ItemCategory = styled.p`
  font-size: 0.7rem;
  margin-top: 3px;
  color: #808080;

  ${({ isComplete }) =>
    isComplete &&
    `
    color: #b0b0b0; 
  `}
`;

const ItemDate = styled(ItemCategory)`
  font-size: 0.8rem;
`;

const ItemImage = styled.img`
  width: 15px;
  align-self: center;
`;

const ItemAccordion = styled.div`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  width: 100%;
  padding-top: 10px;
  height: 0;
  transition: height 0.4s ease;

  ${({ active }) =>
    active === 'active' &&
    `
    height: 45px;
  `}
`;
