import React from 'react'
import { useSelector } from 'react-redux'

import { Quest } from 'components/Quest'

export const QuestLog = () => {
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
    <main>
      {(mainQuests.length > 0)
        && <>
          <h3>Main</h3>
          {mainQuests.map((e) => (
            <Quest key={`quest-${e}`} questIndex={e} />))}
        </>}
      {(sideQuests.length > 0)
        && <>
          <h3>Side</h3>
          {sideQuests.map((e) => (
            <Quest key={`quest-${e}`} questIndex={e} />))}
        </>}
      {(miscellaneousQuests.length > 0)
        && <>
          <h3>Miscellaneous</h3>
          {miscellaneousQuests.map((e) => (
            <Quest key={`quest-${e}`} questIndex={e} />))}
        </>}
    </main>
  )
}