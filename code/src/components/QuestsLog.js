import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quests } from 'reducer/quests'

import { Quest } from 'components/Quest'

export const QuestsLog = () => {
  const dispatch = useDispatch()
  const categoriesList = useSelector((state) => state.quests.categories)
  const questsList = useSelector((state) => state.quests.questsList)

  const [text, setText] = useState()
  const [category, setCategory] = useState(categoriesList[0])

  const handleChangeText = (e) => { setText(e.target.value) }
  const handleChangeCategory = (e) => setCategory(e.target.value)
  const handleClick = () => {
    dispatch(quests.actions.createQuest({ text, category }))
    setText('')
  }

  const options = categoriesList.map((e, index) => {
    const key = `option-${index}`

    return (
      <option value={e} key={key}>{e}</option>
    )
  })

  return (
    <>
      {questsList.map((e, index) => (<Quest key={`quest-${index}`} questIndex={index} />))}
      <input type="text" value={text} onChange={handleChangeText} />
      <select
        onChange={handleChangeCategory}
        value={category}>
        {options}
      </select>
      <button type="button" onClick={handleClick}>Add</button>
    </>
  )
}