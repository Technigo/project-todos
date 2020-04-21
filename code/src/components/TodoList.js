import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux"

export const TodoList = () => {

    const list = useSelector((store) => store.todos.list);

    return (
        <article>


        </article>


    )

}