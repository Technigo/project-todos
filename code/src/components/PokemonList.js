import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import pokemons from 'reducers/pokemons'

const PokemonItem = styled.article`
    border: 1px solid #dcdcdc;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 5px;
    position: relative;
`

const DeleteButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    cursor: pointer;
`

const PokemonList = () => {
const pokemonList = useSelector((backpack) => backpack.pokemons.items)

// console.log(pokemonList)

const dispatch = useDispatch()

const onPokemonToggle = (pokemonId) => {
    dispatch(pokemons.actions.toggleItem(pokemonId))
}

return (
<section>
    {pokemonList.map(pokemonItem => (
        <PokemonItem key={pokemonItem.id}>
            <h2>{pokemonItem.name}</h2>
            <label>
                Is caught:
            <input type="checkbox" checked={pokemonItem.isCaught}
            onChange={() => onPokemonToggle(pokemonItem.id)}/>
            </label>
            <DeleteButton>
                <span role="img" aria-label="delete">🧨</span>
            </DeleteButton>
        </PokemonItem>
    ))}
</section>
)
}

export default PokemonList;