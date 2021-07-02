import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styled from 'styled-components/macro';

import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

import todos from '../reducers/todos';

const TodoList = () => {

  const items = useSelector((store) => store.todos.items);
  const completedItems = items.filter(singleTodo => singleTodo.isComplete);
  const addLabel = useSelector((store) => store.todos.addLabel);
  const dispatch = useDispatch();
    
    return (
      <TodoContainer>
        <TodoWrapper>
          <TodoHeader>
            <Title>Malin's To do list</Title>
            <CompletedSection>
              <CompletedTasks>Completed: {completedItems.length}/{items.length}</CompletedTasks>
            </CompletedSection>
          </TodoHeader>
            <div className="user-input">
              <TextField
                required
                variant="standard"
                type="text"
                className="add-todo"
                placeholder="Add to do here "
                id="todoLabel"
                onChange={(e) => dispatch(todos.actions.setAddLabel(e.target.value))}
                value={addLabel}
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                size="small"
                startIcon={<SaveIcon />}
                aria-label="add todo"
                onClick={() => {
                  dispatch(todos.actions.addToDo()) 
                }}
              > Save
              </Button>
            </div>

            {items.map(todo =>  (
              <UserInput key={todo.id}>
                <Checkbox
                  type="checkbox"
                  color="primary"
                  checked={todo.isComplete}
                  onChange={() => dispatch(todos.actions.toggleComplete(todo.id))}
                />
                <p className="todo-description">{todo.description}</p>
                  <IconButton
                    aria-label="remove"
                    onClick={() => dispatch(todos.actions.removeToDo(todo.id))}
                  >
                    <DeleteIcon fontSize="small"/>
                  </IconButton>
              </UserInput>
            ))}
        </TodoWrapper>
      </TodoContainer>
    )
};

export default TodoList;

const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TodoWrapper = styled.section`
  background-color: #D8EEFE;
  max-width: 400px;
  margin: 50px 20px;
  padding: 30px 20px;
  border-radius: 20px;
`

const TodoHeader = styled.header`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

const Title = styled.h1`
`

const CompletedSection = styled.section`
`

const CompletedTasks = styled.p`

`

const UserInput = styled.section`
  display: flex;
  flex-direction: row;
`