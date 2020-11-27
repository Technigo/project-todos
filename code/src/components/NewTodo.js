import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import styled from 'styled-components';

// Reducers
import { todos } from '../reducers/todos';

// Styling
import { InnerFlexWrapper, Button } from '../styling/GlobalStyling';

// -----------------------------------------------------------------------------

export const NewTodo = ({ setAddTaskVisible }) => {
  const dispatch = useDispatch();

  // New task contents
  const [todo, setTodo] = useState('');
  const [category, setCategory] = useState('');
  const [prio, setPrio] = useState(false);

  // Categories
  const options = [
    { value: 'Home', label: 'Home' },
    { value: 'Work', label: 'Work' },
    { value: 'Love', label: 'Love' },
    { value: 'Shop', label: 'Shop' },
    { value: 'Fix', label: 'Fix' },
  ];

  const handleSelectChange = (selectedOption) => {
    setCategory(selectedOption.value);
  };

  const handleToggleCheckbox = () => {
    prio ? setPrio(false) : setPrio(true);
  };

  // Close new task-popup
  const handleCloseNewTaskButton = () => {
    setAddTaskVisible(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Set a creation date
    const createdAt = new Date();
    // Create a unique id
    const createdId = Math.floor(Math.random() * 10000) + 1;

    if (todo && category !== '') {
      dispatch(
        todos.actions.addTodo({
          id: createdId,
          task: todo,
          category: category,
          prio: prio,
          isCompleted: false,
          createdAt: createdAt,
        })
      );
      // Reset all states to default after submit
      setTodo('');
      setCategory('');
      setPrio(false);
      setAddTaskVisible(false);
    } else {
      alert('Please write a task and/or select a category first');
    }
  };

  return (
    <NewTodoWrapper>
      <NewTodoInput
        type="text"
        placeholder="Write your new task here..."
        onChange={(event) => setTodo(event.target.value)}
        value={todo}
      />
      <CategoryAndPrioWrapper>
        <div>
          <Label>Set category:</Label>
          <CustomSelect
            value={category.value}
            onChange={handleSelectChange}
            options={options}
            placeholder="Select a category"
          />
        </div>
        <div>
          <Label htmlFor="newTask">Prioritized?</Label>
          <Checkbox
            type="checkbox"
            name="prioritized"
            id="newTask"
            checked={prio}
            onChange={handleToggleCheckbox}
          />
        </div>
      </CategoryAndPrioWrapper>
      <ButtonWrapper>
        <CloseButton type="button" onClick={handleCloseNewTaskButton}>
          ✕
        </CloseButton>
        <NewTodoButton type="submit" value="submit" onClick={handleSubmit}>
          +
        </NewTodoButton>
      </ButtonWrapper>
    </NewTodoWrapper>
  );
};

// Local styles -----------------------------

const NewTodoWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 77%;
  max-width: 400px;
  z-index: 2;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border: 2px solid #fff;
  border-radius: 10px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;

  @media (min-width: 350px) {
    flex-direction: column;
  }

  & input {
    background: transparent;
  }
`;

const NewTodoInput = styled.input`
  margin: 20px 0 20px 2px;
  padding: 10px 20px 10px 5px;
  border: none;
  border-bottom: 1px solid #000;
  background: #fff;
`;

const CategoryAndPrioWrapper = styled(InnerFlexWrapper)`
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const CustomSelect = styled(Select)`
  width: 280px;
  margin-bottom: 10px;
`;

const Label = styled.label`
  font-size: 10px;
  text-transform: uppercase;
  padding-bottom: 20px;
`;

const Checkbox = styled.input`
  transform: translateY(3px);
`;

const ButtonWrapper = styled(InnerFlexWrapper)`
  margin-top: 10px;
`;

const CloseButton = styled(Button)`
  width: 50px;
  height: 50px;
`;

const NewTodoButton = styled.button`
  height: 50px;
  width: 50px;
  padding: 5px;
  border: none;
  border-radius: 25px;
  background: #4300ca;
  color: #fff;
  font-size: 24px;

  &:hover {
    cursor: pointer;
    background: #eae0ff;
    color: #4300ca;
  }
`;
