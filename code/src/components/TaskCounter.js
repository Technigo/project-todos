import React from 'react'
import styled from 'styled-components'
import { useSelector} from 'react-redux'


const Counter=styled.div`
.counter-container{color:red;
}



`


export const TaskCounter=()=>{
const tasklist=useSelector((store)=>store.tasks.items)
const totalTasks=tasklist
const tasksCompleted=tasklist.filter((item)=>item.isDone===true)


if(totalTasks.length===0)
return(<h4>Sweet, nothing to do today, enjoy!</h4>)
else if(totalTasks.length===tasksCompleted.length)
return(<h4>All done!</h4>)
else 
return (
<Counter>
<div className="counter-container">
       <h4>You have completed {tasksCompleted.length} of {totalTasks.length} tasks</h4>
      
    </div>
</Counter>)
}