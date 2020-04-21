import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todos } from '../reducers/todos.js';

export const Summary = () => {
  // pick up the list from the store
  const list = useSelector((store) => store.todos.list);

  // Counter of how many tasks left to do/how many things left to shop
  const notShopped = list.items.filter((item) => !item.shopped).length - 1;
  const notCompleted = list.items.filter((item) => !item.completed).length - 1;
  const uncompleted = notShopped + notCompleted;

  return (
    <section>
      {uncompleted === 0 ? (
        <h2>Yay! You have finished all your tasks!</h2>
      ) : (
        <> </>
      )}
      {uncompleted === 1 ? (
        <h2>You have only one teeny tiny thing on your list today!</h2>
      ) : (
        <> </>
      )}
      {uncompleted > 1 && uncompleted <= 5 ? (
        <h2>You have only {uncompleted} things left to do!</h2>
      ) : (
        <> </>
      )}
      {uncompleted > 5 ? (
        <h2>
          You have {uncompleted} things to do on your list! Keep up the good
          work!
        </h2>
      ) : (
        <> </>
      )}
    </section>
  );
};
