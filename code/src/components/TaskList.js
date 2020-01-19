import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Item } from './Item'
import { fridge } from '../reducers/fridge' 
import { ClearButton } from './ClearButton'
import './tasklist.css'
// const Tasks 

export const TaskList = () => {
const items = useSelector((state) => state.fridge.items ) //useSelector takes a function as an argument and what the function returns will become the items list. It enokes the function with the current state in the redux-store 
// const initialState = useSelector((state) => state.fridge)



// console.log(items.length)
// if fridge is empty, then show nothing. So go back to state.items.length === 0 then show no clear all button 



    return(
        <>
            {!items.lenght === 0 && (
        
                <div className="no-tasks">
                    <h2>Seems like you have no tasks at this moment...</h2>
                    </div> 
                    )
                    }

            {items.length >= 1 && (

                <div className="list-container">
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
