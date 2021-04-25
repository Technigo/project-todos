import React from 'react';
import { useDispatch} from 'react-redux';
import styled from 'styled-components';

import tasks from '../reducers/tasks';

const Button = styled.button`
background-color: #2f5d62;
color: white;
border: none;
font-family: 'Noto Sans KR', sans-serif;
font-size: 20px;
border-radius: 5px;
padding: 5px 8px 5px 10px;
&:hover { background-color: #6c9fa3;
cursor: pointer};
&:active { background-color: #ffb037;}
@media (min-width: 768px){
  font-size: 26px;
}
`
const ConmpleteAllTasksButton= () => {
  const dispatch = useDispatch();
  
  const onClear = () => {
    dispatch(tasks.actions.setAllTaskstoCompleted());
  };

  return (
    <div>
      <Button onClick={onClear}>All done!</Button>
    </div> 
  )
}
export default ConmpleteAllTasksButton;