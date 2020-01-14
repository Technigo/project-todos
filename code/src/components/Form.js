import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quests } from 'reducer/quests'

export const Form = () => {
  const dispatch = useDispatch()

  const categoriesList = useSelector((state) => state.quests.categories)
  const [text, setText] = useState()
  const [category, setCategory] = useState(categoriesList[0])

  const handleChangeText = (e) => { setText(e.target.value) }
  const handleChangeCategory = (e) => setCategory(e.target.value)
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(quests.actions.createQuest({ text, category }))
    setText('')
  }
  const handleDeleteAll = () => (dispatch(quests.actions.deleteAllQuests()))

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleChangeText} />
        <select
          onChange={handleChangeCategory}
          value={category}>
          {categoriesList.map((e, index) => (
            <option value={e} key={`option-${index}`}>{e}</option>
          ))}
        </select>
        <button type="submit">Add</button>
      </form>
      <button type="button" onClick={handleDeleteAll}>
        Clear Your Quest Log
      </button>
    </>
  )
}