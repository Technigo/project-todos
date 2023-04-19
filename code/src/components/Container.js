import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './Header'
import AddTodo from './AddTodo'
import TodoList from './TodoList'

const StyledTabs = styled.div`
  width: 60px;
  height: 170px;
  padding: 0;
  background-color: transparent;
  color: black;
  position: relative;
  z-index: 1;
  bottom: 220px;
  left: 450px;
    
  @media (max-width: 667px) {
    width: 50px;
    height: 250px;
    bottom: 300px;
    left: 325px;
  }
`;

const StyledTabP = styled.p`
  font-family: 'Montserrat';
  font-size: 16px;
  margin: 5px;
  text-align: center;
  @media (max-width: 667px) {
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
  &:active {
    background-color: #DA58C2;
  }
  @media (max-width: 667px) {
    width: 50px;
    height: calc(250px / 3);
  }
`;

// When the user clicks on one of the tabs, we shall update the store with a filtered array
// The TodoList component should be rendered based on that
// Do we need to use useSelector or is dispatch enough? To send an action?
const Container = () => {
  const [selectedTab, setSelectedTab] = useState('all')
  // const filteredList = useSelector((store) => store.tasks.items);
  // const dispatch = useDispatch();
  return (
    <>
      <div className="Container">
        <Header />
        <AddTodo />
        <TodoList selectedTab={selectedTab} />
      </div>
      <StyledTabs>
        <StyledTab id="tab-all" isSelected={selectedTab === 'all'} borderRadius="0 12px 0 0" onClick={() => setSelectedTab('all')}>
          <StyledTabP>All</StyledTabP>
        </StyledTab>
        <StyledTab id="tab-not-done" isSelected={selectedTab === 'notDone'} borderRadius="0" onClick={() => setSelectedTab('notDone')}>
          <StyledTabP>Not done</StyledTabP>
        </StyledTab>
        <StyledTab id="tab-done" isSelected={selectedTab === 'done'} borderRadius="0 0 12px 0" onClick={() => setSelectedTab('done')}>
          <StyledTabP>Done</StyledTabP>
        </StyledTab>
      </StyledTabs>
    </>
  );
}

export default Container;
