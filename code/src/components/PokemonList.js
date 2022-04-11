import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import styled from 'styled-components'


const PokemonList = () => {

    const pokemonList = useSelector((backpack) => backpack.pokemons.items)

    const dispatch = useDispatch()
    const onPokemonToggle = (pokemonId) => {
        dispatch(pokemons.actions.toggleItem(pokemonId))
    }



console.log(pokemonList)
    return (
        <section>Todo list will be here 
            
            
            {pokemonList.map(pokemonItem => (

                <article>
                    <h2>{pokemonItem.name}</h2>
                    <label>
                        Is caught:
                    <input 
                    type="checkbox" 
                    checked={pokemonItem.isCaught} 
                    onChange={() => onPokemonToggle(pokemonItem.id)} />
                    </label>
                    <button>
                        Remove pokemon
                    </button>

                </article>

            ))}
            
            </section>

    )

}

export default PokemonList