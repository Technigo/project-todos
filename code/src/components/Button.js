import React from 'react';

const Button =  ({ onClick, text, type, className, disabled}) => {
  return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={className}
      >
        {text}
      </button>
  )
}
export default Button; 