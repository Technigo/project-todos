import React from 'react';
import { useDispatch } from 'react-redux';
import CheckBox from 'react-animated-checkbox'
import { MdOutlineRemoveCircle } from 'react-icons/md'
import { FlexRow } from 'reusable-components/Container';
import { Button } from 'reusable-components/Button';
import { tasks } from 'reducers/tasks';
import { TaskText } from './TasksStyling';

export const Task = ({ task, index, completed }) => {
  // const [isChecked, setIsChecked] = useState(false);
  // const isCompleted = useSelector((store) => store.tasks.);
  const dispatch = useDispatch();
  // const isCompleted = useSelector((store) => store.tasks.tasks.);
  const handleCheckboxChange = (selectedTaskIndex) => {
    // setIsChecked(!isChecked);
    dispatch(tasks.actions.checkItem({ index: selectedTaskIndex }))
  };

  const handleRemoveTask = (selectedTaskId) => {
    dispatch(tasks.actions.removeItem({ id: selectedTaskId }))
  }

  return (
    <FlexRow>
      <CheckBox
        checked={completed}
        checkBoxStyle={{
          checkedColor: '#B9F3E4',
          size: 40,
          unCheckedColor: '#b8b8b8'
        }}
        duration={400}
        onClick={() => handleCheckboxChange(index)} />
      <TaskText>{task.text}</TaskText>
      <Button onClick={() => handleRemoveTask(task.id)}><MdOutlineRemoveCircle fontSize="2em" color="#FFAACF" /></Button>
    </FlexRow>
  )
}