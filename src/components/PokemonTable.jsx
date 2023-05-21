import React, { useContext } from "react";
import PokemonRaw from "./PokemonRaw";
import PokemonContext from "../PokemonContext";

export const PokemonTable = () => {
  const { pokemon, filter, setselectedItem } = useContext(PokemonContext);
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
