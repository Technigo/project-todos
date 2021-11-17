import React from "react"

import "./header.css"

import { CountItems } from "./CountItems"

export const Header = () => {
  return (
    <header>
      <h1>TO DO LIST</h1>
      <CountItems />
    </header>
  )
}
