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
        <label htmlFor="newQuest">My next adventure will be:</label>
        <input type="text" maxlength="20" value={text} required onChange={handleChangeText} id="newQuest" />
        <label htmlFor="category">Category:</label>
        <select
          onChange={handleChangeCategory}
          value={category}>
          {categoriesList.map((e, index) => (
            <option value={e} key={`option-${index}`}>{e}</option>
          ))}
        </select>
        <button type="submit" className="success">Add</button>
        <button type="button" onClick={handleDeleteAll}>
          Clear Your Quest Log
        </button>
      </form>

    </>
  )
}