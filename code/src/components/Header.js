import React from 'react'
import { TodoCount } from "./TodoCount"
import { Date } from "./Date"

import "./header.css"

export const Header = () => {
  return (
    <header className="todos-header">
      <h1 className="todos-header-title">Todos</h1>
      <Date />
      <TodoCount />
    </header>
  )
}