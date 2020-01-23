import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text }) => (
  <li 
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {/* <input type="checkbox"/>
    <span className="checkbox-custom">
      {text}</span>  */}
    <input className="styled-checkbox" type="checkbox"/>
      <label for="styled-checkbox"></label>
    {text}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}
export default Todo
