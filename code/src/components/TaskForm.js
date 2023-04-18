/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

// Define a functional component named ThoughtForm that accepts props for the new thought,
// a function to update the new thought, and a function to handle form submission
// Define state to track the character count of the new thought
const TaskForm = ({ newThought, setNewThought, onFormSubmit }) => {
  const [charCount, setCharCount] = useState(0);

  const handleNewThoughtChange = (event) => {
    const inputText = event.target.value;
    setNewThought(inputText);
    setCharCount(inputText.length);
  };

  // Define a boolean variable to indicate if the character count is over the limit
  const isOverLimit = charCount > 140;

  // Define a function to reset the character count to 0
  const resetCharCount = () => {
    setCharCount(0);
  };

  // Call the onFormSubmit function passed in as a prop with the event object as an argument
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onFormSubmit(event);
        resetCharCount(); // Reset the character count after submitting the form
      }}
      aria-label="Task Form">
      <h2 aria-hidden="true">Add a Task</h2>
      <label htmlFor="happy-thought-input" className="sr-only">
        Type a task here
      </label>
      <textarea
        placeholder="Type a task here"
        value={newThought}
        onChange={handleNewThoughtChange}
        maxLength={1000}
        aria-label="Task input"
        aria-invalid={isOverLimit} />
      <div className="char-count" style={{ color: isOverLimit ? 'red' : 'inherit' }}>
        {isOverLimit ? <span>{charCount}</span> : <span>{charCount}</span>}/140
      </div>
      <button type="submit" disabled={isOverLimit}>
        Add task
      </button>
    </form>
  );
};

export default TaskForm;
