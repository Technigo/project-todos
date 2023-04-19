import React from 'react';
import { useDispatch } from 'react-redux';
import { formatDistanceToNow, compareAsc } from 'date-fns'
import CheckBox from 'react-animated-checkbox'
import { MdOutlineRemoveCircle } from 'react-icons/md'
import { FlexRow } from 'reusable-components/Container';
import { Button } from 'reusable-components/Button';
import { tasks } from 'reducers/tasks';
import { TaskText, DateText, TaskCardContainer } from './TasksStyling';

export const Task = ({ task }) => {
  // const [isChecked, setIsChecked] = useState(false);
  // const isCompleted = useSelector((store) => store.tasks.);
  const dispatch = useDispatch();
  // const isCompleted = useSelector((store) => store.tasks.tasks.);
  const handleCheckboxChange = (selectedTaskId) => {
    // setIsChecked(!isChecked);
    dispatch(tasks.actions.checkItem({ id: selectedTaskId }))
  };

  const handleRemoveTask = (selectedTaskId) => {
    dispatch(tasks.actions.removeItem({ id: selectedTaskId }))
  }

  const createdDateFormatted = formatDistanceToNow(
    new Date(task.created),
    { addSuffix: true }
  )

  const dueDateFormatted = formatDistanceToNow(
    new Date(task.due),
    { addSuffix: true }
  )

  return (
    <TaskCardContainer>
      <FlexRow>
        <CheckBox
          checked={task.completed}
          checkBoxStyle={{
            checkedColor: '#B9F3E4',
            size: 40,
            unCheckedColor: '#b8b8b8'
          }}
          duration={400}
          onClick={() => handleCheckboxChange(task.id)} />
        <TaskText>{task.text}</TaskText>
        <Button onClick={() => handleRemoveTask(task.id)}><MdOutlineRemoveCircle fontSize="2em" color="#FFAACF" /></Button>
      </FlexRow>
      <FlexRow>
        <DateText>created {createdDateFormatted}</DateText>
        <DateText>{compareAsc(new Date(task.due), Date.now()) === -1 ? 'overdue' : dueDateFormatted}</DateText>
      </FlexRow>
    </TaskCardContainer>
  )
}