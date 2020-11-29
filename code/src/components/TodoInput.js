import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import DatePicker from 'react-date-picker';
import Select from 'react-select';
import styled from 'styled-components';

import { todos } from '../reducers/todos';
import { Button } from '../library/Button';

const TodoInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [category, setCategory] = useState('');
  const [dueDate, setDueDate] = useState(new Date());

  const dispatch = useDispatch();
  const history = useHistory();

  const options = useSelector(store => store.todos.list.options);

  const handleSelectChange = selectedOption => {
    setCategory(selectedOption.label);
  };

  const onSubmit = event => {
    event.preventDefault();
    console.log(inputValue);
    dispatch(
      todos.actions.addTodo({
        todoItemInfo: {
          id: uuidv4(),
          description: inputValue,
          complete: false,
          category: category,
          dueDate: dueDate.getTime(),
          createdAt: new Date().getTime(),
        },
      })
    );
    history.goBack();
  };

  console.log(dueDate);
  return (
    <Main>
      <Form onSubmit={onSubmit}>
        <Input
          required
          type="text"
          onChange={event => setInputValue(event.target.value)}
          value={inputValue}
          placeholder="Add New Task"
        ></Input>
        <CustomDatePicker onChange={date => setDueDate(date)} value={dueDate} />
        <CustomSelect
          options={options}
          onChange={handleSelectChange}
          placeholder="Select a category"
          //styles={customStyles}
          theme={theme => ({
            ...theme,
            border: 'none',
            borderRadius: 0,
            backgroundColor: 'transparent',
            color: '#fff',
            colors: {
              ...theme.colors,
              primary25: '#7E77CC',
              primary: '#5C52AC',
            },
          })}
        />
        <AddButton type="submit">Add Task</AddButton>
      </Form>
    </Main>
  );
};

export default TodoInput;

const Main = styled.main`
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  padding: 25px;
`;

const Input = styled.input.attrs({ type: 'text' })`
  background-color: transparent;
  border: none;
  border-bottom: 0.5px solid lightgray;
  height: 30px;
  width: 100%;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);

  ::placeholder {
    font-size: 1rem;
    font-family: 'Montserrat', sans-serif;
    color: rgba(255, 255, 255, 0.4);
    padding-left: 5px;
  }
`;

const CustomSelect = styled(Select)`
  width: 100%;
`;

const CustomDatePicker = styled(DatePicker)`
  width: 100%;
  color: rgba(255, 255, 255, 0.7);
  height: 40px;
`;

const AddButton = styled(Button)`
  width: 140px;
  height: 45px;
  color: #28e177;
  letter-spacing: 2.5px;
  background-color: transparent;
  border: 2px solid #28e177;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);

  :hover {
    background-color: #2ee59d;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #3b2f7d;
  }
`;
