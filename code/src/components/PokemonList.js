import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import pokemons from 'reducers/pokemons'

const PokemonItem = styled.article`
  border-radius: 4px;
  padding: 12px;
  margin-bottom: 6px;
  background: linen;
  position: relative;
`

const DeleteButton = styled.button`
  position: absolute;
  top: 8px;
  right: 6px;
  background: none;
  border: none;
  cursor: pointer;
`

const ToDoItem = styled.h2`
  font-family: 'Quicksand', sans-serif;
  color: #D885A3;
  font-size: 20px;
`

const DeleteEmoji = styled.span`
  font-size: 28px;
`

const PokemonList = () => {
  const pokemonList = useSelector((store) => store.pokemons.items)

  const dispatch = useDispatch()

  const onPokemonToggle = (pokemonId) => {
      dispatch(pokemons.actions.toggleItem(pokemonId))
  }  

    return (
      <section>
        {pokemonList.map(pokemonItem => (
          <PokemonItem key={pokemonItem.id}>
            <ToDoItem>{pokemonItem.name}</ToDoItem>
            <input 
              type="checkbox" 
              checked={pokemonItem.isDone} 
              onChange={() => onPokemonToggle(pokemonItem.id)}
            />
            <label htmlFor="completed">Done</label>
            <DeleteButton>
              <DeleteEmoji role="img" aria-label="delete">
                ✖
              </DeleteEmoji>
            </DeleteButton>
          </PokemonItem>
        ))}
    </section>
  )
}

export default PokemonList