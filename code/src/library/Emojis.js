import styled from 'styled-components'

// About setting attributes in styled components: 
//see Jennies lecture 1 @44 mins. (It could be even more generic than this)
export const AddTodoEmoji = styled.span.attrs({ 
  role: 'img', 
  'aria-label': 'write-emoji',
})`
  font-size: 40px;
  margin-left: 15px;
`;