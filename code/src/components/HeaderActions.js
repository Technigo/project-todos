import React from "react"

import ActionComplete from "./ActionComplete"
import ActionDelete from "./ActionDelete"

const HeaderActions = () => {
  return (
    <>
      <ActionDelete />
      <ActionComplete />
    </>
  )
}

export default HeaderActions
