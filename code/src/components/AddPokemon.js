import React from 'react';

const AddPokemon = () => {
  return (
    <section>
      <form>
        <label htmlFor="addPokemonInput">
        Add your new Pokemon here.
          <input id="addPokemonInput" type="text" />
        </label>
      </form>
    </section>
  )
}

export default AddPokemon;