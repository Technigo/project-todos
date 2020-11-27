import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { bag } from 'redux/reducers/bag'
import { HandleThings } from 'components/HandleThings'


export const ListedThings = () => {
  const items = useSelector((state) => state.bag.items)
  const [packing, setPacking] = useState('false')
  const dispatch = useDispatch()

  const handleShowTheBag = () => {
    dispatch(bag.actions.showTheBag(packing))
  }

  return (
    <>
        <button
        value={packing}
        type='button' 
        onChange={(event) => setPacking(event.target.packing)}
        onClick={handleShowTheBag}>
        Packed
      </button>
    <ul>
      {items.map((item) => (
        <HandleThings key={item.id} item={item}/>
      ))}
    </ul>
    <h5>Things in the bag {items.length}</h5>
    
    </>
  )
}