import PropTypes from "prop-types";

const PokemonRaw = ({ pokemon }) => {
  return (
    <tr>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(", ")}</td>
    </tr>
  );
};

PokemonRaw.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.shape({
      english: PropTypes.string,
    }),
    type: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default PokemonRaw;
