import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import styled from 'styled-components';

import TodoSummary from './TodoSummary';

const ListHeader = () => {
  //const dispatch = useDispatch();

  // const handleClick = () => {
  //   dispatch(todos.actions.createTodo);
  // };
  return (
    <HeaderContainer>
      <HeaderTitleContainer>
        <HeaderLinkContainer>
          <Link to={'/create_todo'}>
            <HeaderIcon src="../assets/plus.svg" />
          </Link>
        </HeaderLinkContainer>
        <HeaderTitle>Do it</HeaderTitle>
        <HeaderTitle>tomorrow</HeaderTitle>
        <HeaderDate>
          <HeaderDateBold>{moment().format('dddd')}</HeaderDateBold>,{' '}
          {moment().format('Do MMMM')}
        </HeaderDate>
      </HeaderTitleContainer>

      {/* <Button type="button">+</Button> */}
      <TodoSummary />
    </HeaderContainer>
  );
};

export default ListHeader;

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-image: linear-gradient(#3b2f7d, #483c90, #5c52ac);
`;

const HeaderTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 25px;
`;

const HeaderLinkContainer = styled.div`
  align-self: flex-end;
`;

const HeaderIcon = styled.img`
  height: 30px;
  align-self: flex-end;
  opacity: 0.85;

  :hover {
    opacity: 1;
  }
`;

const HeaderTitle = styled.h1`
  color: rgba(255, 255, 255, 0.6);
  font-weight: lighter;
  font-size: 3.5rem;
  margin-top: -10px;
`;

const HeaderDate = styled.p`
  color: rgba(255, 255, 255, 0.6);
`;

const HeaderDateBold = styled.span`
  font-weight: bold;
`;
