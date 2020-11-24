import React from 'react';
import { useDispatch } from 'react-redux';

import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom'

import TodoInput from '../components/TodoInput';
import TodayDate from 'components/TodayDate';

//import Button from '../components/Button';
import { Button } from '../lib/Button'
import { todos } from '../reducers/todos';

const CreateTodo = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  console.log(history)

  // const handleClick = () => {
  //   dispatch(todos.actions.navHomePage())
  // }

  const handleClick = () => {
    history.goBack();
    console.log(handleClick)  
  }
 

  return (
    <div>
      {/* <TodayDate /> */}
      <TodoInput /> 
      <Link to='/'>
        <Button 
          //onClick = {() => handleClick()}
          //onclick = {() => history.goBack()}
          type="button" 
          className="go-back-button"
        >
          Go Back
        </Button>
      </Link>
    </div>
  )
}
export default CreateTodo;