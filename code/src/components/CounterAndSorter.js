import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Select from 'react-select';

// Styling
import { InnerFlexWrapper, InfoText } from '../styling/GlobalStyling';

// ----------------------------------------------------------------

export const CounterAndSorter = ({ showingCategory, setShowingCategory }) => {
  const amountOfTasks = useSelector((store) => store.todos.tasks.length);
  const amountOfIncompletedTasks = useSelector(
    (store) =>
      store.todos.tasks.filter((task) => task.isCompleted === true).length
  );

  const options = [
    { value: 'All', label: 'All' },
    { value: 'Fun', label: 'Fun' },
    { value: 'Nom', label: 'Nom' },
    { value: 'Shop', label: 'Shop' },
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
        Completed: {amountOfIncompletedTasks} / {amountOfTasks}
      </InfoTextCounter>
    </CounterAndSorterWrapper>
  );
};

// Local styles -------------------------------------------
const CounterAndSorterWrapper = styled(InnerFlexWrapper)`
  align-items: flex-end;
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
