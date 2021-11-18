import React from "react"

import "./header.css"

import { CountItems } from "./CountItems"

export const Header = () => {
  return (
    <header>
      <h1>To do list</h1>
      <CountItems />
    </header>
  )
}
