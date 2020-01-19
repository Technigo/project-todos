import React from "react"

import "./attribution.css"

export const Attribution = () => {
  return (
    <details className="attributon-details">
      <summary className="attribution-summary">Icon and image attribution</summary>
      <ul className="attribution-list">
        <li>
          <a href="https://icons8.com/icons/set/checkmark">Checkmark icon</a> icon by <a href="https://icons8.com">Icons8</a>
        </li>
        <li>
          <a href="https://icons8.com/icons/set/delete-sign">Delete icon</a> icon by <a href="https://icons8.com">Icons8</a>
        </li>
        <li>
          <a href="https://icons8.com/icons/set/plus">Plus icon</a> icon by <a href="https://icons8.com">Icons8</a>
        </li>
        <li>
          <a href="https://icons8.com/ouch/subject/list-is-empty-1">Empty list illustration</a> by <a href="https://icons8.com/">Ouch.pics</a>
        </li>
      </ul>
    </details>
  )
}