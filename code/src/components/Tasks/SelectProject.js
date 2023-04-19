import React from 'react';
import { useSelector } from 'react-redux';
import { SelectProject } from './TasksStyling';

export const Project = () => {
  const options = useSelector((store) => store.tasks.projects);
  return (
    <SelectProject>
      {options.map((option) => {
        return (
          <option key={option.value}>{option.label}</option>
        )
      })}

    </SelectProject>
  )
}