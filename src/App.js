import { useState } from "react";
import "./App.css";
import PokemonRaw from "./PokemonRaw";

import pokemon from "./pokemon.json";
import PokemonInfo from "./PokemonInfo";

function App() {
  const [filter, setFilter] = useState("");
  const [selectedItem, setselectedItem] = useState(null);

  return (
    <div
      style={{
        margin: "auto",
        width: 800,
        paddingTop: "1rem",
      }}
    >
      <h1 className="title">Pokemon Search</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "70% 30%",
          gridColumnGap: "1rem",
        }}
      >
        <div>
          <input
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
      </div>
    </div>
  );
}

export default App;
