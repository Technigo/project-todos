import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import toDos from 'reducers/todo';
import { StyledHeader } from './styled/Header.styled';

const Header = () => {
  const dispatch = useDispatch();
  const taskList = useSelector((store) => store.toDos.items);
  // const [taskCount, setTaskCount] = useState(0);
  const month = new Date().toLocaleString('en', { month: 'long' });
  const date = new Date().getDate();
  /*   useEffect(() => {
    taskList.map((task) => {
        if (task.done) {
            return
        }
    }
  }, []) */

  return (
    <StyledHeader>
      <div>
        <h1>Todo</h1>
        <p>{month} {date}</p>
      </div>
      <div>
        <p>{taskList.length} tasks</p>
        <button type="button" onClick={() => dispatch(toDos.actions.clearAll())}>Clear all</button>
      </div>
    </StyledHeader>
  );
};

export default Header;