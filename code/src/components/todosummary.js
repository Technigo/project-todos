import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todos } from '../reducers/todos.js';

export const Summary = () => {
  // pick up the list from the store
  const list = useSelector((store) => store.todos.list);

  // Counter of how many tasks left to do
  const uncompleted = list.items.filter((item) => !item.completed).length - 1;

  return (
    <div>
      {uncompleted === 0 ? (
        <p>Yay! You have finished all your tasks!</p>
      ) : (
        <> </>
      )}
      {uncompleted === 1 ? (
        <p>You have only one teeny tiny thing on your list today!</p>
      ) : (
        <> </>
      )}
      {uncompleted > 1 && uncompleted <= 5 ? (
        <p>You have only {uncompleted} things left to do!</p>
      ) : (
        <> </>
      )}
      {uncompleted > 5 ? (
        <p>
          You have {uncompleted} things to do on your list! Keep up the good
          work!
        </p>
      ) : (
        <> </>
      )}
    </div>
  );
};
