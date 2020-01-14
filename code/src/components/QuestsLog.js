import React from 'react'
import { useSelector } from 'react-redux'

import { Quest } from 'components/Quest'
import { Form } from 'components/Form'

export const QuestsLog = () => {
  const questsList = useSelector((state) => state.quests.questsList)

  const mainQuests = []
  const sideQuests = []
  const miscellaneousQuests = []

  questsList.forEach((e, index) => {
    if (e.category === 'Main') {
      mainQuests.push(index)
    } else if (e.category === 'Side') {
      sideQuests.push(index)
    } else {
      miscellaneousQuests.push(index)
    }
  })

  return (
    <>
      <h3>Main</h3>
      {mainQuests.map((e) => (
        <Quest key={`quest-${e}`} questIndex={e} />))}
      <h3>Side</h3>
      {sideQuests.map((e) => (
        <Quest key={`quest-${e}`} questIndex={e} />))}
      <h3>Miscellaneous</h3>
      {miscellaneousQuests.map((e) => (
        <Quest key={`quest-${e}`} questIndex={e} />))}
      <Form />
    </>
  )
}