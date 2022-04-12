import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  return (
    <div>
      <button>Completed</button>
      <button>Uncompleted</button>
    </div>
  );
};

export default Header;
