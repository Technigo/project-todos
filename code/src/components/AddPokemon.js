import React, {useState } from 'react'
import {useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import uniqid from 'uniqid'

import pokemons from 'reducers/pokemons'

const AddPokemon = () => {
    const [inputValue, setInputValue] = useState('')

    const dispatch = useDispatch()

    const onFormSubmit = (event) => {
        event.preventDefault()

        const newPokemon = {
            id: uniqid(),
            name: inputValue,
            isCaught: false,
        }

        dispatch(pokemons.actions.addItem(newPokemon))

        setInputValue('')
    }

    return (
        <form onSubmit={onFormSubmit}>
            <label> 
                New Pokemon : &nbsp; 
                <input 
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

export default AddPokemon