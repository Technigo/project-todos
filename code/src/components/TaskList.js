import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';
import styled from 'styled-components';
import angledownIMG from '../assets/angledown.svg'
import angleupIMG from '../assets/angleup.svg'
import minusIMG from '../assets/minus.svg'

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
        <Btn type="button" onClick={toggleSortingOrder}>
          Category {sortingOrder === 'asc' ? <img src={angleupIMG} alt="Sort ascending" /> : <img src={angledownIMG} alt="Sort descending" />}
        </Btn>
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
            <MinusBtn type="button" onClick={() => handleDeletingTask(singleTask.id)}>
              <img alt="minus-icon" src={minusIMG} />
            </MinusBtn>
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
    max-height: 50vh;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
`

const DisplayP = styled.p`
  white-space: pre-wrap;
  font-weight: 700;
  width: 16%;`

const Btn = styled.button`
  background-color: rgb(226, 206, 172);
  width: 120px;
  height: 40px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1em;
  font-weight: 700;
  color: black;
  filter: invert(1);

  img {
    height: 20px;
    width: 20px;
  }
`

const MinusBtn = styled.button`
  background-color: rgb(226, 206, 172);
  width: 40px;
  height: 40px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1em;
  font-weight: 700;
  filter: invert(1);

  img {
    height: 20px;
    width: 20px;
  }
`

const FilterDiv = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  margin: 15px;`

export default TaskList;
