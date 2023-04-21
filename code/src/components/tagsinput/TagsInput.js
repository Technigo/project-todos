/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-shadow */
/* eslint-no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tags } from 'redux/reducers/tags';
import {
  TagsInputContainer,
  TagsInputField,
  TagItem
} from 'components/tagsinput/TagsInput.style.js';

export const TagsInput = () => {
  const dispatch = useDispatch();
  const [tagInput, setTagInput] = useState('');
  // const allTags = useSelector((state) => state.tags);
  const allTags = useSelector((state) => state.tags.items);
  console.log('allTaaaaaags', allTags);
  // const dispatch = useDispatch();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newTag = tagInput.trim();
    if (newTag) {
      dispatch(tags.actions.addTag(newTag));
      setTagInput('');
    }
  };

  // const handleTagCloseClick = (tag) => {
  //   dispatch(tags.actions.removeTag(tag));
  // };

  return (
    <section>
      <TagsInputContainer>
        {allTags.map((tag) => (
          <TagItem key={tag.id}>
            <span className="text">{tag.text}</span>
            {/* <span
              className="close"
              onClick={() => handleTagCloseClick(tag)}>
              &times;
            </span> */}
          </TagItem>
        ))}
        <form onSubmit={handleFormSubmit}>
          <TagsInputField
            type="text"
            value={tagInput}
            onChange={(event) => setTagInput(event.target.value)} />
          {/* placeholder="Type something" */}
        </form>
      </TagsInputContainer>
    </section>
  );
};