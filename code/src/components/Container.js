import React from "react"

import { AddContainer } from "./AddContainer"
import { TaskContainer } from "./TaskContainer"

export const Container = () => {
  return (
    <main>
      <AddContainer />
      <TaskContainer />
    </main>
  )
}