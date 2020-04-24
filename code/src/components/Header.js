import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { list } from 'reducers/todolist'
import { headerStyle } from 'components/headerStyle.css'
import { ListSummary } from './ListSummary'

export const Header = () => {
  
return (
    <section className='header'>
        <h1>To-do-list</h1>
    </section>  
)
}