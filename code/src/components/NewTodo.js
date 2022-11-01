/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const NewTodo = () => {
  return (
    <section>
      <form>
        <label htmlFor="new-todo"> New to-do </label>
        <input type="text" name="new-todo" />
      </form>
    </section>
  )
}

export default NewTodo