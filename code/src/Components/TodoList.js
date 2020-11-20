import React from 'react'
import { useSelector } from 'react-redux'

import { TodoInput } from 'Components/TodoInput'
import { RemoveItem } from './RemoveItem'
import { Checkbox } from './Checkbox'

export const TodoList = () => {
    const list = useSelector(store => store.todos.list)

    return (
        <section>
            <TodoInput />
            {list.items.map(item => {
                return (
                    <>
                        {item.description}
                        <Checkbox />
                        <RemoveItem />
                    </>
                )

            })}
        </section>
    )
}