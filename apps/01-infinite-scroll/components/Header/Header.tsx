import React, { useState } from 'react';
import { HeaderContainer } from './Header.styled';
import Axios from 'axios';

export const Header = () => (
  <HeaderContainer>
    <a href="/">
      <img
        src="https://fontmeme.com/permalink/210504/3298fd6b7d2656d4bda6d5822feb2cac.png"
        alt="fonte-de-pokemon"
      />
    </a>
  </HeaderContainer>
);

// const [pokemonName, setPokemonName] = useState("");
// const searchPokemon = () => {
//     Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
//     .then((response) => {
//         console.log(response)
//     })
// };

// return(
//     <div className={styles.headerContainer}>
//         <h1>Pokédex</h1>
//         <input type="text" onChange={(event) => {setPokemonName(event.target.value)}}/>
//         <button onClick={searchPokemon}> Procurar </button>

//     </div>
// )
