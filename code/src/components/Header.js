import React from 'react';
// import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import tasks from 'reducers/tasks';
import { InnerWrapper, OuterWrapper } from 'styles/GlobalStyles';
import styled from 'styled-components';

export const Header = () => {
  // Import dispatches here
  const dispatch = useDispatch();

  // Clear all tasks
  const handleClearTasks = (taskIndex) => {
    dispatch(tasks.actions.clearTasks(taskIndex));
  };

  // Count all tasks
  const handleTaskCounter = useSelector((store) => store.tasks.items.length);

  // const totalTaskInputArray = useSelector((store) => store.tasks.items);
  // console.log(allTasks);

  // // Count checked tasks
  // const completedTasks = handleTaskCounter.filter(
  //   (task) => task.completed === true
  // );

  return (
    <OuterWrapper>
      <InnerWrapper>
        <HeaderWrapper>
          <TitleWrapper>
            <h1>Get it done!</h1>
            {/* <p>{moment().format('ddd, D MMM YYYY')}</p> */}
          </TitleWrapper>
          <div>
            <p>Total: {handleTaskCounter}</p>
            <button type="button" onClick={handleClearTasks}>
              Clear all
            </button>
          </div>
        </HeaderWrapper>
      </InnerWrapper>
    </OuterWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TitleWrapper = styled.div``;
