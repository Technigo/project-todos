import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Select from 'react-select';

// Styling
import { InnerFlexWrapper, InfoText } from '../styling/GlobalStyling';

// ----------------------------------------------------------------

export const CounterAndSorter = ({ showingCategory, setShowingCategory }) => {
  // All tasks
  const amountOfTasks = useSelector((store) => store.todos.tasks.length);
  // All incomplete tasks
  const allUncompletedTasks = useSelector((store) =>
    store.todos.tasks.filter((task) => task.isCompleted === false)
  );
  // All completed tasks
  const allCompletedTasks = useSelector((store) =>
    store.todos.tasks.filter((task) => task.isCompleted === true)
  );
  // Amount of prioritized tasks
  const amountOfPrioritized = allUncompletedTasks.filter(
    (task) => task.prio === true
  ).length;

  // Count how many incomplete tasks there are in a category
  const amountOfItems = (category) => {
    return allUncompletedTasks.filter((task) => task.category === category)
      .length;
  };

  const options = [
    { value: 'All', label: `All (${allUncompletedTasks.length})` },
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
        Completed: {allCompletedTasks.length} / {amountOfTasks}
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
