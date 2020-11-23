import React, { useState } from 'react';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { todos } from '../reducers/todos';
import CustomCheckbox from 'library/CustomCheckbox';
import { Button } from 'library/Button';

const TodoItem = ({ itemIndex }) => {
  // const handleOnChange = event => {
  //   setChecked(event.target.checked);
  // };
  const item = useSelector(store => store.todos.list.items[itemIndex]);
  const [checked, setChecked] = useState(item.complete);
  const [active, setActive] = useState('');
  const [height, setHeight] = useState('0px');
  const [rotate, setRotate] = useState('');

  const dispatch = useDispatch();

  const onRemoveClicked = event => {
    dispatch(
      todos.actions.removeTodo({
        itemIndex: itemIndex,
      })
    );
  };

  const handleOnChange = event => {
    dispatch(
      todos.actions.setComplete({
        itemIndex: itemIndex,
        complete: !item.complete,
      })
    );
    setChecked(event.target.checked);
  };

  const toggleAccordion = () => {
    setActive(active === '' ? 'active' : '');
    setHeight(active === 'active' ? '0px' : '50px');
    setRotate(active === 'active' ? '' : 'rotate');
  };

  return (
    <>
      <Button className={`accordion ${active}`} onClick={toggleAccordion}>
        {/* Checkbox to replace with CustomCheckbox */}
        {/* <input
        type="checkbox"
        onChange={handleOnChange}
        checked={item.complete ? 'checked' : ''}
      ></input> */}

        <CustomCheckbox
          checked={checked}
          onChange={handleOnChange}
        ></CustomCheckbox>
        <TodoContainer>
          <p>{item.description}</p>
          <p>{item.category}</p>
        </TodoContainer>
        {/* <p>{moment(item.dueDate).format('MMM Do YYYY')}</p>
      <p>Created: {moment(item.date).fromNow()}</p> */}
        <Image src="../assets/recycle-bin.svg" onClick={onRemoveClicked} />
        {/* <a onClick={onRemoveClicked}>[Remove]</a> */}
      </Button>
      <Open style={{ height: `${height}` }}>
        <p>Created: {moment(item.date).fromNow()}</p>
        <p>Due: {moment(item.dueDate).format('MMM Do YYYY')}</p>
      </Open>
    </>
  );
};

export default TodoItem;

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const TodoContainer = styled(Container)`
  flex-direction: column;
  align-items: flex-start;
`;

const Image = styled.img`
  width: 20px;
`;

const Open = styled.div`
  background-color: papayawhip;
  overflow: hidden;
`;
