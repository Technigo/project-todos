import React from "react"
import { useSelector } from "react-redux"
import styled from 'styled-components'

export const TodoSummary = () => {

    const list = useSelector(store => store.todos.list);

    const numDone = list.items.filter(item => item.done).length;

    return (
        <section>

            <Title>
                {numDone}/{list.items.length} tasks done
            </Title>


        </section>
    )

}


const Title = styled.h2`
    margin-left: 32px;
    text-align: left;
    font-size: 15px;
    font-family: "Courier New", Courier, monospace;
`