import { useEffect, useState } from "react";
import "./App.css";
import PokemonRaw from "./PokemonRaw";

import PokemonInfo from "./PokemonInfo";
import { styled } from "styled-components";

function App() {
  const [filter, setFilter] = useState("");
  const [selectedItem, setselectedItem] = useState(null);
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/react-project/pokemon.json")
      .then((resp) => resp.json())
      .then((data) => setPokemon(data));
  }, []);

  if (!pokemon) {
    return <div>Loading data</div>;
  }

  return (
    <Container>
      <STitle>Pokemon Search</STitle>
      <TwoColumnLayout>
        <div>
          <Input
            value={filter}
            onChange={(evt) => setFilter(evt.target.value)}
          />

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
        </div>
        {selectedItem && <PokemonInfo {...selectedItem} />}
      </TwoColumnLayout>
    </Container>
  );
}

const STitle = styled.h1`
  text-align: center;
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-column-gap: 1rem;
`;

const Container = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1rem;
`;

const Input = styled.input`
  width: 100%;
  font-size: x-large;
  padding: 0.2rem;
`;

export default App;
