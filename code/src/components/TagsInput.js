import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

export const TagsInputContainer = styled.div`
    border: 2px solid #000;
    padding: .5em;
    border-radius: 3px;
    width: min(80vw, 600px);
    margin-top: 1em;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: .5em;
`;

export const TagItem = styled.div`
    background-color: rgb(218, 216, 216);
    display: inline-block;
    padding: .5em .75em;
    border-radius: 20px;
`
// .tag-item .close
//     height: 20px;
//     width: 20px;
//     background-color: rgb(48, 48, 48);
//     color: #fff;
//     border-radius: 50%;
//     display: inline-flex;
//     justify-content: center;
//     align-items: center;
//     margin-left: .5em;
//     font-size: 18px;
//     cursor: pointer;

export const TagsInputField = styled.input`
flex-grow: 1;
    padding: .5em 0;
    border: none;
    outline: none;
`;

export const TagsInput = () => {
//   const [tags, setTags] = useState('');
  const tags = useSelector(state => state.tags);
  const dispatch = useDispatch();
  const handleInputKeyDown = event => {
    if (event.key === 'Enter') {
        event.preventDefault();
        const tag = event.target.value.trim();
        if (tag) {
            dispatch({ type: 'ADD_TAG', payload: tag });
            setTagInput('');
        }
    } else if (event.key === 'Backspace' && !TagsInput) {
            dispatch({ type: 'REMOVE_TAG', payload: tags[tags.length - 1]});
    }
  };

  return (
    <section>
    <TagsInputContainer>
      {tags.map(tag) => (
     <TagItem key={tag}>
        <span className="text">{tag}</span>
        <span
        className="close"
            onClick={() => dispatch({ type: 'REMOVE_TAG', payload: tag })}
          >
             &times;
            </span>
        <TagsInputField
          type="text"
          value={tagInput}
          onKeyDown={handleInputKeyDown}
          onChange={event => setTagInput(event.target.value)}
          placeholder="Type something"
          />
      </TagItem>
    </TagsInputContainer>
    </section>
    );
};