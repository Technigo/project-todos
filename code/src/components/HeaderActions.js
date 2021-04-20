import React from "react"

import { ActionComplete } from "./ActionComplete"
import { ActionDelete } from "./ActionDelete"

export const HeaderActions = () => {
  return (
    <>
      <ActionDelete />
      <ActionComplete />
    </>
  )
}