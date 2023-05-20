import PropTypes from "prop-types";
import { PokemonType } from "./PokemonInfo";

const PokemonRaw = ({ pokemon, onClick }) => {
  return (
    <tr>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(", ")}</td>
      <td>
        <button onClick={() => onClick(pokemon)}>Select!</button>
      </td>
    </tr>
  );
};

PokemonRaw.propTypes = {
  pokemon: PropTypes.arrayOf(PokemonType),
};

export default PokemonRaw;
