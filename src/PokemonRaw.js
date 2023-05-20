import PropTypes from "prop-types";
import { PokemonType } from "./PokemonInfo";
import Button from "@mui/material/Button";

const PokemonRaw = ({ pokemon, onClick }) => {
  return (
    <tr>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(", ")}</td>
      <td>
        <Button variant="contained" onClick={() => onClick(pokemon)}>
          Select!
        </Button>
      </td>
    </tr>
  );
};

PokemonRaw.propTypes = {
  pokemon: PropTypes.arrayOf(PokemonType),
};

export default PokemonRaw;
