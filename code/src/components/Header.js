import React from "react"

import "./header.css"

import { CountItems } from "./CountItems"

export const Header = () => {
  return (
    <header>
      <h1>Task manager</h1>
      <CountItems />
    </header>
  )
}
