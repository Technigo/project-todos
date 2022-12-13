/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable function-paren-newline */
import React from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import tasks from 'reducers/tasks';
import { TaskListWrapper } from 'styles/GlobalStyles';
import styled from 'styled-components';

export const Header = () => {
  // Import dispatches here
  const dispatch = useDispatch();

  // Clear all tasks
  const handleClearTasks = (taskIndex) => {
    dispatch(tasks.actions.clearTasks(taskIndex));
  };

  // Count all tasks
  const storeItems = useSelector((store) => store.tasks.items);

  // Completed Tasks
  const completedTasks = useSelector((store) =>
    store.tasks.items.filter((item) => item.complete === true)
  );

  return (
    <TaskListWrapper>
      <HeaderWrapper>
        <TitleWrapper>
          <h1>Get it done!</h1>
          <p>{moment().format('ddd, D MMM YYYY')}</p>
        </TitleWrapper>
        {storeItems.length > 0 && (
          <div>
            <p>
              {completedTasks.length} / {storeItems.length} tasks done
            </p>
            <button type="button" onClick={handleClearTasks}>
              Clear all
            </button>
          </div>
        )}
      </HeaderWrapper>
    </TaskListWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TitleWrapper = styled.div``;
