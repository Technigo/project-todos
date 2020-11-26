import React from 'react';

import { TodoParagraph, SubTitle } from '../lib/Text'

const EmptyTodoList = () => {
  return (
    <>
    <SubTitle>Nothing here!</SubTitle>
    <TodoParagraph>Add a todo by clicking the + sign in the top of the page</TodoParagraph>
    </>
  )
}
export default EmptyTodoList;