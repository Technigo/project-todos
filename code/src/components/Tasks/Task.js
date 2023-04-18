import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import CheckBox from 'react-animated-checkbox'
import { MdOutlineRemoveCircle } from 'react-icons/md'
import { FlexRow } from 'reusable-components/Container';
import { Button } from 'reusable-components/Button';
import { TaskText } from './TasksStyling';

export const Task = ({ task }) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <FlexRow>
      <CheckBox
        checked={isChecked}
        checkBoxStyle={{
          checkedColor: '#B9F3E4',
          size: 40,
          unCheckedColor: '#b8b8b8'
        }}
        duration={400}
        onClick={handleCheckboxChange} />
      <TaskText>{task}</TaskText>
      <Button><MdOutlineRemoveCircle fontSize="2em" color="#FFAACF" /></Button>
    </FlexRow>
  )
}