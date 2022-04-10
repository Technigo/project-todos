import React from 'react'

import { FlexRow } from './styles/Containers.styled'


const AllTasks = () => {
  return (
      <FlexRow>
        <label htmlFor="checkTask">
          <input type="checkbox" name="checkTask" />
          <span> Buy milk </span>
        </label>
      </FlexRow>
  )
}

export default AllTasks

