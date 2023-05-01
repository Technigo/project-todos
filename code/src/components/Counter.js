import React from 'react';
import { useSelector } from 'react-redux';

export const Counter = () => {
  const items = useSelector((store) => store.dailies.items)
  const completedDaily = items.filter((dailies) => dailies.toggleDailyCompleted);

  const questDone = () => {
    if (items.length === 0) {
      return ''
    } else if (items.length === completedDaily.length) {
      return `"All done! ${completedDaily.length} / ${items.length}"`
    } else {
      return `${completedDaily.length} / ${items.length} done`
    }
  }

  return (
    <p className={items.length < completedDaily.length}>
      {questDone()}
    </p>
  )
}

