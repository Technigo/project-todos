import React, { useState } from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { Add, Close } from '@mui/icons-material';
import { Section } from '../styles/SectionWrapper.styled';
import { WeekDay, TasksDueToday, DayAndTasksWrapper, HeaderContent, BtnContainer } from './Header.styled';
import { ExpandButton } from '../styles/Button.styled';
import AddTodo from './AddTodo';

// Define the background color you want to use
// const backgroundColor = '#FFC107';
const backgroundColor = '#939393';

const getTasksMessage = (incompleteTasks) => {
  if (incompleteTasks === 0) {
    return 'Breathe easy, no todos!';
  } else if (incompleteTasks === 1) {
    return `${incompleteTasks} task not completed`;
  } else {
    return `${incompleteTasks} tasks not completed`;
  }
};

// Header component for displaying the current day, current date,
// and the number of tasks not completed
const Header = () => {
  const todos = useSelector((state) => state.todos.items);
  const incompleteTodos = todos.filter((todo) => !todo.completed).length;

  const [visible, setVisible] = useState(false);

  const toggleClass = () => {
    setVisible(!visible);
  };

  return (
    <Section style={{ backgroundColor }}>
      <HeaderContent>
        <DayAndTasksWrapper>
          {/* Displaying the current day using moment.js */}
          <WeekDay>{moment().format('dddd')}. </WeekDay>
          {/* Displaying the number of incomplete tasks */}
          <TasksDueToday>
            {getTasksMessage(incompleteTodos)}
          </TasksDueToday>
        </DayAndTasksWrapper>
        <BtnContainer>
          <ExpandButton onClick={toggleClass}>
            {visible ? <Close /> : <Add />}
          </ExpandButton>
        </BtnContainer>
      </HeaderContent>
      <AddTodo visible={visible} />
    </Section>
  );
};

// Export the Header component
export default Header;
