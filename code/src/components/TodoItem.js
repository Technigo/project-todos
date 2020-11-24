import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import styled from 'styled-components';

import { todos } from '../reducers/todos';
import CustomCheckbox from '../library/CustomCheckbox';
import { Button } from '../library/Button';

const TodoItem = ({ item }) => {
  const [checked, setChecked] = useState(item.complete);
  const [active, setActive] = useState('');
  const [height, setHeight] = useState('0px');

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
    setChecked(event.target.checked);
  };

  const toggleAccordion = () => {
    setActive(active === '' ? 'active' : '');
    setHeight(active === 'active' ? '0px' : '50px');
  };

  return (
    <>
      <Button className={`accordion ${active}`} onClick={toggleAccordion}>
        <CustomCheckbox
          checked={item.complete ? true : ''}
          onChange={handleOnChange}
        ></CustomCheckbox>
        <TodoContainer>
          <div>
            <Description checked={item.complete ? true : ''}>
              {item.description}
            </Description>
            <p>{item.category}</p>
          </div>
          <div>
            <Image src="../assets/recycle-bin.svg" onClick={onRemoveTodo} />
          </div>
        </TodoContainer>
      </Button>
      <Open style={{ height: `${height}` }}>
        <p>Created: {moment(item.date).fromNow()}</p>
        <p>Due: {moment(item.dueDate).format('MMM Do YYYY')}</p>
      </Open>
    </>
  );
};

export default TodoItem;

const Description = styled.p`
  color: #000;

  ${({ checked }) =>
    checked &&
    `
    text-decoration: underline;
  `}
`;

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
