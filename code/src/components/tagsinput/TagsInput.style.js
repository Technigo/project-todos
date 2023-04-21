import styled from 'styled-components';

export const TagsInputContainer = styled.div`
  border: 2px dotted #000;
  padding: 0.3rem 1.5rem;
  border-radius: 2rem;
  max-width: 70%;
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

export const TagItem = styled.div`
  background-color: rgb(218, 216, 216);
  display: inline-block;
  padding: .5em .75em;
  border-radius: 20px;
`;

export const TagsInputField = styled.input`
  flex-grow: 1;
  padding: .5em 0;
  border: none;
  outline: none;
`;