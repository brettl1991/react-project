import { useEffect, useState } from "react";
import "./App.css";

import PokemonInfo from "./components/PokemonInfo";
import { styled } from "styled-components";
import PokemonFilter from "./components/PokemonFilter";
import { PokemonTable } from "./components/PokemonTable";
import PokemonContext from "./PokemonContext";

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
    <PokemonContext.Provider
      value={{
        filter,
        selectedItem,
        pokemon,
        setFilter,
        setselectedItem,
        setPokemon,
      }}
    >
      <Container>
        <STitle>Pokemon Search</STitle>
        <TwoColumnLayout>
          <div>
            <PokemonFilter />
            <PokemonTable />
          </div>
          <PokemonInfo />
        </TwoColumnLayout>
      </Container>
    </PokemonContext.Provider>
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

export default App;
