import React from 'react';

export const ListItem = (item) => {
  // console.log(item.listItem.category)

  return (
  <p>{item.listItem.text} / {item.listItem.category}</p>
  );
};
