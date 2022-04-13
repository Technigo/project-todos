import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import pokemons from 'reducers/pokemons'
import styled from 'styled-components'



const PokemonItem = styled.article `
border: 1px solid #dcdcdc; 
padding: 5px;
margin-bottom: 5px;
border-radius: 5px;
position: relative;
`

const DeleteButton = styled.button `
position: absolute;
top: 10px;
right: 10px;
background: none; 
border: none;
cursor: pointer;
`


const PokemonList = () => {
    const pokemonList = useSelector((backpack) => backpack.pokemons.items)

    const dispatch = useDispatch()

    const onPokemonToggle = (pokemonId) => {
        dispatch(pokemons.actions.toggleItem(pokemonId))
    }

    const onPokemonDelete = (index) => {
        dispatch(pokemons.actions.deleteItem(index))
    }

    return (
    <section>
        {pokemonList.map((pokemonItem, pokemonIndex) => (
            <PokemonItem key={pokemonItem.id}>
                <h2>{pokemonItem.name}</h2>
                <label>
                    Is Caught: 
                    <input 
                    type='checkbox' 
                    checked={pokemonItem.isCaught} 
                    onChange={() => onPokemonToggle(pokemonItem.id)}/>
                </label>
                <DeleteButton onClick={() => onPokemonDelete(pokemonIndex)}>
                    <span role='img' aria-label='delete'>❌</span>     
                </DeleteButton>
            </PokemonItem>
        ))}
    </section>

    ) 
}

export default PokemonList