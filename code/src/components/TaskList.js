import React from 'react'
import { useSelector} from 'react-redux'

  // TODO - fetch all to-dos from the store
  // Using useSelector: Och vipps så kommer vi åt allti vår store!

    /*
    - Show TodoInput
    - Show each TodoItem in the list
    - Show TodoSummary - ( but later move this to HEADER)
  */

/*
With all that set up, you can now start creating components. 
For example, you could make a `TaskList` component which uses `useSelector` 
from the 'react-redux' package to fetch the list of todos and map over them.

*/

export const TaskList = () => {
  return (
    <div>✏ TO DO App 📎 📓 🌞 TaskList</div>
  )
}
