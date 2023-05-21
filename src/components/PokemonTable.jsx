import React from "react";
import PokemonRaw from "./PokemonRaw";

export const PokemonTable = ({ pokemon, filter, setselectedItem }) => {
  return (
    <table width="100%">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {pokemon
          .filter(({ name: { english } }) =>
            english.toLowerCase().includes(filter.toLowerCase())
          )
          .slice(0, 20)
          .map((pokemon) => (
            <PokemonRaw
              pokemon={pokemon}
              onClick={(pokemon) => setselectedItem(pokemon)}
            />
          ))}
      </tbody>
    </table>
  );
};
