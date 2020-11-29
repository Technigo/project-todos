import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';
import styled from 'styled-components';

import { todos } from '../reducers/todos';
import { Button } from '../library/Button';

const ListFooter = () => {
  const [isAllComplete, setIsAllComplete] = useState(false);
  const dispatch = useDispatch();

  const handleOnComplete = () => {
    dispatch(todos.actions.setAllComplete());
    setIsAllComplete(true);
  };

  const handleOnNotComplete = () => {
    dispatch(todos.actions.setAllNotComplete());
    setIsAllComplete(false);
  };

  const handleOnRemove = () => {
    swal({
      title: 'Are you sure?',
      text: 'Do you want to remove all your todos?',
      icon: 'warning',
      dangerMode: true,
      buttons: true,
    }).then(willDelete => {
      if (willDelete) {
        dispatch(todos.actions.removeAllTodos());
      }
    });
  };

  return (
    <Footer>
      <FooterButton
        type="button"
        onClick={
          isAllComplete ? () => handleOnNotComplete() : () => handleOnComplete()
        }
      >
        {!isAllComplete ? 'Check All' : 'Uncheck All'}
      </FooterButton>
      <FooterButton type="button" onClick={() => handleOnRemove()}>
        Delete All
      </FooterButton>
    </Footer>
  );
};

export default ListFooter;

const Footer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  padding: 16px;
  margin: 0 auto;
  background: #fff;
`;

const FooterButton = styled(Button)`
  background: #fff;
  border: 2px solid #5c52ac;
  color: #fff;
  font-size: 0.6rem;
  letter-spacing: 1.5px;
  background: #5c52ac;
  font-weight: 500;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);

  :hover {
    color: #fff;
    background: #5c52ac;
    box-shadow: 0px 15px 20px rgba(92, 82, 172, 0.4);
  }
`;
