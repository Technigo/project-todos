import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {todos} from 'reducer/todos'

import {Item} from './Item'



export const TaskList = () => {
    const dispatch = useDispatch();
    const items = useSelector(store => store.todos.items)
    console.log(items)


    return <>{
        items.map((item, index) => (
            <Item key={index} item={item}></Item>
        ))}
        <button onClick={() => dispatch(todos.actions.removeAll())}>Remove One</button>
    </>
}