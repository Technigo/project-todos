import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Select from 'react-select';

// Styling
import { InnerFlexWrapper, InfoText } from '../styling/GlobalStyling';

// ----------------------------------------------------------------

export const CounterAndSorter = ({ showingCategory, setShowingCategory }) => {
  const allTodos = useSelector((store) => store.todos.tasks);

  //Filtering by completed/not completed
  const nonCompletedTasks = allTodos.filter((todo) => !todo.isCompleted);
  const completedTasks = allTodos.filter((todo) => todo.isCompleted);

  // Amount of prioritized tasks
  const amountOfPrioritized = nonCompletedTasks.filter(
    (task) => task.prio === true
  ).length;

  // Count how many incomplete tasks there are in selected category
  const amountOfItems = (category) => {
    return nonCompletedTasks.filter((task) => task.category === category)
      .length;
  };

  // Category options
  const options = [
    { value: 'All', label: `All (${nonCompletedTasks.length})` },
    { value: 'Prioritized', label: `🔥 Prioritized (${amountOfPrioritized})` },
    { value: 'Home', label: `Home (${amountOfItems('Home')})` },
    { value: 'Work', label: `Work (${amountOfItems('Work')})` },
    { value: 'Love', label: `Love (${amountOfItems('Love')})` },
    { value: 'Shop', label: `Shop (${amountOfItems('Shop')})` },
    { value: 'Fix', label: `Fix (${amountOfItems('Fix')})` },
  ];

  const handleChange = (selectedOption) => {
    setShowingCategory(selectedOption.value);
  };

  return (
    <CounterAndSorterWrapper>
      <InnerFlexWrapperColumn>
        <InfoText>Sort by category:</InfoText>
        <CustomSelect
          value={showingCategory.value}
          onChange={handleChange}
          options={options}
          placeholder="Showing All"
          className="react-select-container"
        />
      </InnerFlexWrapperColumn>
      <InfoTextCounter>
        Completed: {completedTasks.length} / {allTodos.length}
      </InfoTextCounter>
    </CounterAndSorterWrapper>
  );
};

// Local styles -----------------------------
const CounterAndSorterWrapper = styled(InnerFlexWrapper)`
  align-items: flex-end;
  margin: auto 20px;
`;

const CustomSelect = styled(Select)`
  width: 240px;
  margin-right: 20px;
`;

const InnerFlexWrapperColumn = styled(InnerFlexWrapper)`
  flex-direction: column;
  align-items: flex-start;
`;

const InfoTextCounter = styled(InfoText)`
  margin: 0;
`;
