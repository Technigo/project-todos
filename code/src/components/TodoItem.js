import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import styled from 'styled-components';

import { todos } from '../reducers/todos';
import CustomCheckbox from '../library/CustomCheckbox';

const TodoItem = ({ item }) => {
  const [active, setActive] = useState('');

  const dispatch = useDispatch();
  //const item = useSelector(store => store.todos.list.items[itemIndex]);

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
    //setChecked(event.target.checked);
  };

  const toggleAccordion = () => {
    setActive(active === '' ? 'active' : '');
  };

  return (
    <>
      {/* <ItemWrapper> */}
      <ItemWrapper onClick={toggleAccordion}>
        {/* <ItemButton> */}
        <CheckboxLabel>
          <CustomCheckbox
            checked={item.isComplete ? true : ''}
            onChange={handleOnChange}
          ></CustomCheckbox>
        </CheckboxLabel>
        {/* <div> */}
        <Item>
          <ItemContainer>
            <ItemDescriptionContainer>
              <ItemDescription isComplete={item.isComplete}>
                {item.description}
              </ItemDescription>
              <ItemCategory isComplete={item.isComplete}>
                {item.category}
              </ItemCategory>
            </ItemDescriptionContainer>
            {/* <ItemImageContainer> */}
            {(item.isComplete || active) && (
              <ItemImage src="../assets/cancel.svg" onClick={onRemoveTodo} />
            )}

            {/* </ItemImageContainer> */}
          </ItemContainer>
          {/* </ItemButton> */}
          {/* style={{ height: `${height}` }} */}
          <ItemAccordion active={active}>
            {/* <ItemDescriptionContainer> */}
            <ItemDate isComplete={item.isComplete}>
              Created: {moment(item.createdAt).fromNow()}
            </ItemDate>
            <ItemDate isComplete={item.isComplete}>
              Due: {moment(item.dueDate).format('MMM Do YYYY')}
            </ItemDate>
            {/* </ItemDescriptionContainer> */}
          </ItemAccordion>
        </Item>
        {/* </div> */}
      </ItemWrapper>
      {/* </ItemWrapper> */}
    </>
  );
};

export default TodoItem;

const ItemWrapper = styled.article`
  display: flex;
`;

// const ItemButton = styled.button`
//   width: 100%;
//   background-color: transparent;
//   border: none;
//   display: flex;
//   border-bottom: 1px solid lightgray;
//   padding: 20px;
// `;

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
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  /* border-bottom: 1px solid lightgray; */
`;

const ItemDescriptionContainer = styled.div``;

const ItemDescription = styled.p`
  color: #404040;

  ${({ isComplete }) =>
    isComplete &&
    `
    color: lightgray; 
    color: #b0b0b0; 
  `}
`;

const ItemCategory = styled(ItemDescription)`
  font-size: 0.7rem;
  margin-top: 3px;
  color: gray;
  color: #808080;

  ${({ isComplete }) =>
    isComplete &&
    `
    color: lightgray; 
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
    height: 40px;
  `}
`;
