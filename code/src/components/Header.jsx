import React from 'react'

const Header = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const currentDate = `${day}/${month}/${year}`;
  return (
    <div className="text-center mb-8">
      <h1 className="font-bold text-2xl mb-4">To do list</h1>
      <div className="text-base">{currentDate}</div>
    </div>
  )
}

export default Header