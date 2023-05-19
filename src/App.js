import { useState } from "react";
import "./App.css";
import PokemonRaw from "./PokemonRaw";

import pokemon from "./pokemon.json";

function App() {
  const [filter, setFilter] = useState("");

  return (
    <div
      style={{
        margin: "auto",
        width: 800,
        paddingTop: "1rem",
      }}
    >
      <h1 className="title">Pokemon Search</h1>
      <input value={filter} onChange={(evt) => setFilter(evt.target.value)} />
      <table width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {pokemon
            .filter((pokemon) =>
              pokemon.name.english.toLowerCase().includes(filter.toLowerCase())
            )
            .slice(0, 20)
            .map((pokemon) => (
              <PokemonRaw pokemon={pokemon} key={pokemon.id} />
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
