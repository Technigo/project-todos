/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

export const CheckBox = ({ id }) => {
  return (
    <>
      <input type="checkbox" id={id} />
      <label htmlFor={id} />
    </>
  )
}