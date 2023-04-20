/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-shadow */
/* eslint-no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tags } from 'redux/reducers/tags';
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
`;

export const TagsInputField = styled.input`
  flex-grow: 1;
  padding: .5em 0;
  border: none;
  outline: none;
`;

export const TagsInput = () => {
  const dispatch = useDispatch();
  const [tagInput, setTagInput] = useState('');
  // const allTags = useSelector((state) => state.tags);
  const allTags = useSelector((state) => state.tags.items);
  // const dispatch = useDispatch();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newTag = tagInput.trim();
    if (newTag) {
      dispatch(tags.actions.addTag(newTag));
      setTagInput('');
    }
  };

  const handleTagCloseClick = (tag) => {
    dispatch(tags.actions.removeTag(tag));
  };

  return (
    <section>
      <TagsInputContainer>
        {allTags.items.map((tag) => (
          <TagItem key={tag}>
            <span className="text">{tag}</span>
            <span
              className="close"
              onClick={() => handleTagCloseClick(tag)}>
              &times;
            </span>
          </TagItem>
        ))}
        <form onSubmit={handleFormSubmit}>
          <TagsInputField
            type="text"
            value={tagInput}
            onChange={(event) => setTagInput(event.target.value)}
            placeholder="Type something" />
        </form>
      </TagsInputContainer>
    </section>
  );
};