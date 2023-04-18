import React from 'react';
import Moment from 'react-moment';

export const Header = () => {
  return (
    <>
      <h1> To Do List</h1>
      <Moment format="dddd, Do MMMM YYYY" />
    </>
  )
}