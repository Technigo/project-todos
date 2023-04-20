import React from 'react';
import { useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';
import AddTask from 'components/AddTask';
import TaskList from 'components/TaskList';
import { ButtonContainer, MainContainer } from 'components/MainStyling';
import { Header } from 'components/Header';
import { Button } from './Button';

export const Main = () => {
  const dispatch = useDispatch();

  const handleToggleComplete = () => {
    dispatch(tasks.actions.completeAll());
  };

  const handleClearAll = () => {
    dispatch(tasks.actions.clearAll());
  };

  return (
    <>
      <Header />
      <MainContainer>
        <AddTask />
        <TaskList />
        <ButtonContainer>
          <Button
            type="button"
            onClick={() => handleToggleComplete()}> Complete All ✅
          </Button>
          <Button
            binBtnColor
            type="button"
            onClick={() => handleClearAll()}> Clear All 🗑️
          </Button>
        </ButtonContainer>
      </MainContainer>
    </>
  )
}