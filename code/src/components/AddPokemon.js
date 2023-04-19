// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import pokemons from 'reducers/pokemon';

// const AddPokemon = () => { /* A function */
//   const [inputValue, setInputValue] = useState('');// State variable to track input.
//   // Create dispatch to be able to go to store/pokemons and select our reducer/action
//   // and send it in there.
//   const dispatch = useDispatch();
//   const onFormSubmit = (event) => {
//     event.preventDefault(); // Otherwise form will reload.
//     const newPokemon = {
//       id: Date.now().toString(),
//       name: inputValue.toUpperCase(), // Input value, sending it there.
//       isCaught: false
//     };
//     dispatch(pokemons.actions.addPokemon(newPokemon));
//     setInputValue('');
//     // https://www.random.org/
//   }

//   return (
//     <section>
//       <form onSubmit={onFormSubmit}>
//         <label htmlFor="addPokemon">
//         Add Your new Pokemon here, PokeMaster
//           <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} id="addPokemonInput" type="text" />
//         </label>
//         <button type="submit"> Add Now!</button>
//       </form>
//     </section>
//   )
// }

// export default AddPokemon;