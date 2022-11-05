import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro'
import { OuterWrapper, InnerWrapper } from 'utils/GlobalStyle'
import tasks from '../reducers/todos'
import mainIcon from '../assets/mainIcon.png'

const Header = () => {
  const dispatch = useDispatch();

  // Shows total number of tasks in the list
  const taskList = useSelector((store) => store.tasks.items);

  // Show number of completed tasks
  const completedTasks = taskList.filter((task) => task.isCompleted);

  // Function to delete all tasks
  const handleDeleteAllTasks = () => {
    dispatch(tasks.actions.deleteAllTasks());
  }

  // Returns title, task counter and delete button
  return (
    <>
      <OuterWrapper header1>
        <InnerWrapper>
          <AppTitle>Daily Tasks <TodoIcon src={mainIcon} alt="Todo icon" /></AppTitle>
        </InnerWrapper>
      </OuterWrapper>
      <OuterWrapper header2>
        <InnerWrapper>
          <p>Completed tasks:{' '}
            {completedTasks.length} / {taskList.length}
          </p>
          <button type="button" onClick={handleDeleteAllTasks}>remove all</button>
        </InnerWrapper>
      </OuterWrapper>
    </>

  )
}

export default Header

const AppTitle = styled.h1`
text-align: center;
`;

const TodoIcon = styled.img`
max-height: 10%;
max-width: 20%;
margin-bottom: -5%;
`;

