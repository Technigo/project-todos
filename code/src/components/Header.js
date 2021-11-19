import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
  const amountQuests = useSelector((store) => store.quests.items.length)
  return (
    <header>
      <h1>
        My Quests <span className='amount-quests'>{amountQuests}</span>
      </h1>
    </header>
  )
}

export default Header
