import React from 'react'


import { useSelector } from 'react-redux'

import { 
    CountWrapper, 

} from 'components/StyleComponents'


const Counter = () => {
    
    
    const taskArray = useSelector((store) => store.tasks.items)
   
    const finishedTasks = useSelector((store) => store.tasks.items.filter(t => t.status))

    const unfinishedTasks = useSelector((store) => store.tasks.items.filter(t => !t.status))


    return (
        <CountWrapper>

        <p>Total: {taskArray.length}</p> 
        <p>Finished: {finishedTasks.length} </p>
        <p> Unfinished: {unfinishedTasks.length}</p> 

         
        </CountWrapper>
    )
}

export default Counter;
