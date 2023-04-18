import React from 'react';

const ItemList = (props) => {
  return (
    <div className="list-item">
      <input type="radio" />
      <p>{props.text}</p>
      <button type="button">To remove</button>
    </div>
  );
};

export default ItemList;
