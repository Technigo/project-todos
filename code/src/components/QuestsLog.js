import React from 'react'
import { useSelector } from 'react-redux'

import { Quest } from 'components/Quest'
import { Form } from 'components/Form'

export const QuestsLog = () => {
  const questsList = useSelector((state) => state.quests.questsList)

  return (
    <>
      {questsList.map((e, index) => (
        <Quest key={`quest-${index}`} questIndex={index} />))}
      <Form />
    </>
  )
}