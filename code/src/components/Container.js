import React from "react"

import { AddButton } from "./AddButton"
import { Task } from "./Task"

export const Container = () => {
  return (
    <section>
      <AddButton />
      <Task />
    </section>
  )
}