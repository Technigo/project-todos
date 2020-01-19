import React from "react"
import { useSelector } from "react-redux"
import "./emptyListState.css"
import listIllustration from "../icons/kingdom-list-is-empty.png"

export const EmptyListState = () => {
  const list = useSelector(state => state.todos.tasks)
  const emptyList = list.length === 0;

  return (
    <>
      {emptyList && (
        <div className="message">
          <img src={listIllustration} alt="An empty and sad list." className="message-image" />
          <h2 className="message-title">Your todo list is empty</h2>
          <p className="message-text">Either you've got nothing to do, or you've finished all of your todos.<br />
            Add a todo and it will show up here.</p>
        </div>

      )}
    </>
  )
}