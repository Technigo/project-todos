import React from 'react';
import { useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';
import AddTask from 'components/AddTask/AddTask';
import TaskList from 'components/TaskList/TaskList';
import { ButtonContainer, MainContainer } from 'components/Main/MainStyling';
import { Header } from 'components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Footer } from 'components/Footer';
import { Button } from '../Button';

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
        <ButtonContainer>
          <Button
            smallBtn
            type="button"
            onClick={() => handleToggleComplete()}> <FontAwesomeIcon icon={faCircleCheck} size="lg" />
          </Button>
          <Button
            binBtnColor
            smallBtn
            type="button"
            onClick={() => handleClearAll()}> <FontAwesomeIcon icon={faTrash} size="lg" />
          </Button>
        </ButtonContainer>
        <TaskList />
      </MainContainer>
      <Footer />
    </>
  )
}

