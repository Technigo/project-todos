import React from 'react';
import { useDispatch } from 'react-redux';
import { updateProjectName } from 'reducers/tasksproject';

export const ListNameInput = ({ listIndex, setProjectStarted, listName, setListName }) => {
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setListName(event.target.value);
    setProjectStarted(true)
  };

  const handleBlur = () => {
    if (listName.trim() !== '') {
      dispatch(updateProjectName({ listIndex, listName }));
    }
  };

  return (
    <div>
      <input
        type="text"
        value={listName}
        onChange={handleInputChange}
        onBlur={handleBlur}
        placeholder={`List ${listIndex + 1}`} />
    </div>
  );
};

