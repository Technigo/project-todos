import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Item } from './Item'
import { fridge } from '../reducers/fridge' 
import { ClearButton } from './ClearButton'
import './tasklist.css'
// const Tasks 

export const TaskList = (props) => {
const items = useSelector((state) => state.fridge.items ) //useSelector takes a function as an argument and what the function returns will become the items list. It enokes the function with the current state in the redux-store 
// const initialState = useSelector((state) => state.fridge)

// const [isThereItem, setIsThereItem] = useState('')
// if fridge is empty, then show nothing. So go back to state.items.length === 0 then show no clear all button 


    return(
        <>
            {!items && (
                <div class="list-container">
                    <ul>
                        {items.map((item) => {
                            return <Item 
                                key={item.id}
                                item={item} />
                        })}
                    </ul> 
                    </div> 
                    )}

            {items && (
                <div class="list-container">
                    <ul>
                        {items.map((item) => {
                        return <Item 
                        key={item.id}
                        item={item} />
                        })}
                    </ul>  
                    <ClearButton />
                </div>
            )}
          </>  
    )
}
