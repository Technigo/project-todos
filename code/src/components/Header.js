import React from 'react'
import "./header.css"
import { TodoCount } from "./TodoCount"

export const Header = () => {
  return (
    <header className="todos-header">
      <h1 className="todos-header-title">My todos</h1>
      <TodoCount />
    </header>
  )
}