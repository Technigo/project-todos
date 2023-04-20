import React, { useState } from 'react';

export const AllDone = () => {
  const [emptyState, setEmptyState] = useState([])

  const EmptyState = () => {
    if (emptyState === 0) {
      return 'All done'
    }
  }
  return <p>{EmptyState}</p>
}
