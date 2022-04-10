import React from 'react'

import { Card } from './styles/Containers.styled'
import { TagsWrapper, Tag } from './styles/Tags.styled'


import { useSelector, useDispatch } from 'react-redux';

const AddTasks = () => {

  const dispatch = useDispatch()

  const onTaskSubmit = () => {
    dispatch()
  }

  return (
    <Card>
      <form>
        <label htmlFor="content">
          <input
            type="text"
            placeholder="Add your task here..."
            name="content"
          />
        </label>
        <img 
         role='button' 
         src='./images/add-icon.svg' 
         alt='add task'
         onClick={()=>onTaskSubmit}
         />
      </form>
        <TagsWrapper>
          <Tag color='#3DB429'>work</Tag>
          <Tag color='#F36969'>study</Tag>
          <Tag color='#5B87C9'>shopping</Tag>
          <Tag color='#A093D4'>gym</Tag>
          <Tag color='#FB9A08'>misc</Tag>
        </TagsWrapper>
    </Card>
  )
}

export default AddTasks