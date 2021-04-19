import React from "react"

import { Counter } from "./Counter"
import { ClearButton } from "./ClearButton"

export const Header = () => {
  return (
    <header>
      <h1>To do</h1>
      <Counter />
      <ClearButton />
    </header>
  )
}