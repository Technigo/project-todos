import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';
import styled from 'styled-components';

const TaskList = () => {
  const taskList = useSelector((store) => store.tasks.items);
  const dispatch = useDispatch();
  const [sortingOrder, setSortingOrder] = useState('asc'); // 'asc' for ascending, 'desc' for descending

  const handleCheckboxChange = (id) => {
    dispatch(tasks.actions.toggleComplete({ id }));
  };

  const handleDeletingTask = (id) => {
    dispatch(tasks.actions.deleteTask({ id }));
  };

  const sortedTaskList = [...taskList].sort((a, b) => {
    const categoryA = a.category.toLowerCase();
    const categoryB = b.category.toLowerCase();
    if (sortingOrder === 'asc') {
      return categoryA.localeCompare(categoryB);
    } else {
      return categoryB.localeCompare(categoryA);
    }
  });

  const toggleSortingOrder = () => {
    setSortingOrder(sortingOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <TaskListWrapper>
      <FilterDiv>
        <Btn type="button" onClick={toggleSortingOrder}>Category {sortingOrder === 'asc' ? '⇩' : '⇧'}</Btn>
      </FilterDiv>
      {sortedTaskList.map((singleTask) => {
        return (
          <SingleTaskWrapper key={singleTask.id}>
            <input
              type="checkbox"
              checked={singleTask.isComplete}
              onChange={() => handleCheckboxChange(singleTask.id)} />
            <DisplayP>{singleTask.name}</DisplayP>
            <DisplayP>Created: {singleTask.timeStamp}</DisplayP>
            <DisplayP>Due: {singleTask.dueDate}</DisplayP>
            <DisplayP>Category: {singleTask.category}</DisplayP>
            <Btn type="button" onClick={() => handleDeletingTask(singleTask.id)}>
              Delete
            </Btn>
          </SingleTaskWrapper>
        );
      })}
    </TaskListWrapper>
  );
};

const SingleTaskWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TaskListWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const DisplayP = styled.p`
  white-space: pre-wrap;
  font-weight: 700;
  width: 16%;`

const Btn = styled.button`
  background-color: #1D3153;
  color: white;
  width: 80px;
  height: 30px;
  border-radius: 18px;
`

const FilterDiv = styled.div`
  height: 50px;
  display: flex;
  align-items: center;`

export default TaskList;
