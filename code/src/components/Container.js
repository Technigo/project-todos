import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './Header'
import AddTodo from './AddTodo'
import TodoList from './TodoList'

const StyledTabP = styled.p`
  font-family: 'Montserrat';
  font-size: 16px;
  margin: 5px;
  text-align: center;
  @media (max-width: 520px) {
    font-size: 14px;
  }
`;

const StyledTab = styled.div`
  font-family: 'Montserrat';
  width: 60px;
  height: calc(170px / 3);
  background-color: ${(props) => (props.isSelected ? '#DA58C2' : 'white')};
  color: ${(props) => (props.isSelected ? 'white' : 'black')};
  border-radius: ${(props) => props.borderRadius};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #DA58C2;
    ${StyledTabP} {
      color: white;
      font-weight: bold;
    }
  }
  @media (max-width: 560px) {
    width: calc(180px / 3);
    height: 50px;
    border-radius: ${(props) => props.borderRadiusSmall};
  }
`;

const Container = () => {
  const [selectedTab, setSelectedTab] = useState('all')
  return (
    <div className="Container-wrapper">
      <div className="Container">
        <Header />
        <AddTodo />
        <TodoList selectedTab={selectedTab} />
      </div>
      <div className="Tabs">
        <StyledTab id="tab-all" isSelected={selectedTab === 'all'} borderRadius="0 12px 0 0" borderRadiusSmall="0 0 0 12px" onClick={() => setSelectedTab('all')}>
          <StyledTabP>All</StyledTabP>
        </StyledTab>
        <StyledTab id="tab-not-done" isSelected={selectedTab === 'notDone'} borderRadius="0" borderRadiusSmall="0" onClick={() => setSelectedTab('notDone')}>
          <StyledTabP>Not done</StyledTabP>
        </StyledTab>
        <StyledTab id="tab-done" isSelected={selectedTab === 'done'} borderRadius="0 0 12px 0" borderRadiusSmall="0 0 12px 0" onClick={() => setSelectedTab('done')}>
          <StyledTabP>Done</StyledTabP>
        </StyledTab>
      </div>
    </div>
  );
}

export default Container;
