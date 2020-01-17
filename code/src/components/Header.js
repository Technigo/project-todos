import React from 'react'
import "./header.css"
import { TodoCount } from "./TodoCount"
import { Date } from "./Date"

export const Header = () => {
  return (
    <header className="todos-header">
      <h1 className="todos-header-title">Todos</h1>
      <Date />
      <TodoCount />
    </header>
  )
}